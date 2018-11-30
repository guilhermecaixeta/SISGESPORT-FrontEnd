import { TipoPonto } from './../../../../model/tipo-ponto.model';
import { BaseCrudComponent } from './../../../../base/base-crud.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-ponto-crud',
  templateUrl: './tipo-ponto-crud.component.html',
  styleUrls: ['./tipo-ponto-crud.component.scss'],
  animations: [routerTransition()]
})
export class TipoPontoCrudComponent extends BaseCrudComponent {
  value: boolean = false;
  rota = 'tipoPonto';

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(50)]],
    valor: [null, [Validators.required, Validators.min(1)]],
  });

  Finalizar() {
    let ponto = new TipoPonto(this.formulario.value);
    this.Persistir<TipoPonto>(ponto);
  }
}
