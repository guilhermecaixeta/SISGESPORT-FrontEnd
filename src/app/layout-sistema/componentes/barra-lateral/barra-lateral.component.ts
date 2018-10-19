import { MenuLateral } from '../../../entity/menu-lateral';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {
  isActive: boolean = false;
  showMenu: boolean = false;
  pushRightClass: string = 'push-right';
  @Input() lista: MenuLateral[] = [
    {
      IClass: 'fa fa-fw fa-dashboard',
      legend: 'Principal',
      router: '/principal',
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-fw fa-bank',
      legend: 'Instituição',
      router: '/instituicao',
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-plus',
      legend: 'Menus Diversos',
      router: '/teste',
      nestedsMenus: [
        {
          IClass: 'fa fa-plus',
          legend: 'Sub-menu 1',
          router: '/teste',
          nestedsMenus: null
        },
        {
          IClass: 'fa fa-plus',
          legend: 'Sub-menu 2',
          router: '/teste',
          nestedsMenus: null
        }
      ]
    }
  ];

  constructor(public router: Router) {
    
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() { }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  expandirMenu(element: any) {
    if (element === this.showMenu) {
      this.showMenu = false;
    } else {
      this.showMenu = element;
    }
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
}
