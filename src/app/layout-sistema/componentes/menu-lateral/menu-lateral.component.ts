import { usuario } from './../../../model/iusuario.model';
import { MenuLateral } from '../../../model/menu-lateral';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  @Input() lista: MenuLateral[];
  @Input() usuario: any;
  isActive: boolean = false;
  showMenu: boolean = false;
  constructor() { }

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
}
