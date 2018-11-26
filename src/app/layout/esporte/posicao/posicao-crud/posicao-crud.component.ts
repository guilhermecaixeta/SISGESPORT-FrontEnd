import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { Validators } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { Posicao } from '../../../../model/posicao.model';

@Component({
  selector: 'app-posicao-crud',
  templateUrl: './posicao-crud.component.html',
  styleUrls: ['./posicao-crud.component.scss'],
  animations: [routerTransition()]
})
export class PosicaoCrudComponent extends BaseCrudComponent {
  value: boolean = false;
  rota = 'posicao';

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(30)]],
    descricao: [null, [Validators.required, Validators.maxLength(30)]],
    numMaxJogador: [1, [Validators.required]],
    numMinJogador: [1, [Validators.required]]
  });

  finalizar() {
    this.Persistir<Posicao>(new Posicao(this.formulario.value));
  }
}
