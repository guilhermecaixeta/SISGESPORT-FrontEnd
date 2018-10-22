import { CargoComponent } from './cargo.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoCrudComponent } from './cargo-crud/cargo-crud.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CargoComponent },
      { path: ':acao', component: CargoCrudComponent },
      { path: ':acao/:id', component: CargoCrudComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }
