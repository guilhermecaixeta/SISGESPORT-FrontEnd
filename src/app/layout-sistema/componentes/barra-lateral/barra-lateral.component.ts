import { MenuSide } from './../../../entity/menu-side';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  @Input() lista: MenuSide[] = [
    {
      IClass: 'fa fa-fw fa-dashboard',
      legend: 'Principal',
      router: '/principal',
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-fw fa-bar-chart-o',
      legend: 'Gráficos',
      router: '/',
      nestedsMenus: null
    },
    {
      IClass: 'fa fa-plus',
      legend: 'Menus Diversos',
      router: '/',
      nestedsMenus: [
        {
          IClass: 'fa fa-plus',
          legend: 'Sub-menu 1',
          router: '/',
          nestedsMenus: null
        },
        {
          IClass: 'fa fa-plus',
          legend: 'Sub-menu 2',
          router: '/',
          nestedsMenus: null
        }
      ]
    }
  ];

  constructor(private translate: TranslateService, public router: Router) {
    this.translate.addLangs(['pt', 'en', 'es']);
    this.translate.setDefaultLang('pt');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/pt|en|es/) ? browserLang : 'pt');

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

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }
}
