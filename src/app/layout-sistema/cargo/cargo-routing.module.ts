import { CargoComponent } from './cargo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargoCrudComponent } from './cargo-crud/cargo-crud.component';
import { AuthGuard } from '../../shared';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
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
