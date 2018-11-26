import { MenuLateral } from '../../../model/menu-lateral';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  @Input() lista: MenuLateral[];
  @Input() usuario: any;
  isActive: boolean = false;
  expandir = {
    showMenu: false,
    rota: ''
  };

  constructor() { }

  ngOnInit() { }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  expandirMenu(element: any, rota: string) {
    this.expandir.showMenu = this.expandir.rota == rota;
    this.expandir.rota = rota;
    if (element === this.expandir.showMenu) {
      this.expandir.showMenu = false;
      this.expandir.rota = '';
    } else {
      this.expandir.showMenu = element;
    }
  }
}
