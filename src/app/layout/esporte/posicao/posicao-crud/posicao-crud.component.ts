import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { Validators, FormControl } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { Posicao } from '../../../../model/posicao.model';
import { MenorQue } from '../../../../utils/validators.util.component';

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

  iniciar(){
    this.formulario.get('numMaxJogador').setValidators(MenorQue(this.formulario.controls.numMinJogador as FormControl));
  }
  Finalizar() {
    this.Persistir<Posicao>(new Posicao(this.formulario.value));
  }
}
