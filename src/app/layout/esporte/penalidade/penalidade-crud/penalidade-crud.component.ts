import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { Validators } from '@angular/forms';
import { Penalidade } from '../../../../model/penalidade.model';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-penalidade-crud',
  templateUrl: './penalidade-crud.component.html',
  styleUrls: ['./penalidade-crud.component.scss'],
  animations: [routerTransition()]
})
export class PenalidadeCrudComponent extends BaseCrudComponent {
  value: boolean = false;
  rota = 'penalidade';

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(30)]],
    descricao: [null, [Validators.required, Validators.maxLength(60)]],
  });

  Finalizar() {
    let penalidade = new Penalidade(this.formulario.value);
    this.Persistir<Penalidade>(penalidade);
  }
}
