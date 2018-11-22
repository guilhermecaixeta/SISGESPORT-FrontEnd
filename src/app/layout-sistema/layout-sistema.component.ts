import { BaseComponent } from './../base/base.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-sistema',
  templateUrl: './layout-sistema.component.html',
  styleUrls: ['./layout-sistema.component.scss']
})
export class LayoutSistemaComponent extends BaseComponent {
  hasToken = localStorage.getItem('token') !== null;
  userData: any;
  ngOnInit() {
    this.observablePadrao.getValue.subscribe(x => {
      if (x) {
        this.userData = x.data;
      } else {
        this.service.ObterUsuario().subscribe();
      }
    });
  }

}
