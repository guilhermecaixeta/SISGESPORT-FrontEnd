import { Posicao } from './../../../../model/posicao.model';
import { Penalidade } from './../../../../model/penalidade.model';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { Validators, FormControl } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { Modalidade } from '../../../../model/modalidade.model';
import { MenorQue } from '../../../../utils/validators.util.component';
import { TipoPonto } from '../../../../model/tipo-ponto.model';

@Component({
  selector: 'app-modalidade-crud',
  templateUrl: './modalidade-crud.component.html',
  animations: [routerTransition()]
})
export class ModalidadeCrudComponent extends BaseCrudComponent<Modalidade> {
  value: boolean = false;
  rota = 'modalidade';
  listaPenalidade: Penalidade[];
  listaTipoPonto: TipoPonto[];
  listaPosicao: Posicao[];

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(30)]],
    descricao: [null, [Validators.required, Validators.maxLength(60)]],
    numMaxJogador: [1, [Validators.required, Validators.min(1)]],
    numMinJogador: [1, [Validators.required, Validators.min(1)]],
    penalidade: [null, [Validators.required]],
    posicao: [null, [Validators.required]],
    tipoPonto: [null, [Validators.required]]
  });

  iniciar() {
    this.formulario.get('numMaxJogador').setValidators(MenorQue(this.formulario.controls.numMinJogador as FormControl));
    this.service.Get<Penalidade[]>('penalidade/BuscarTodos').subscribe(data => this.listaPenalidade = data);
    this.service.Get<TipoPonto[]>('tipoPonto/BuscarTodos').subscribe(data => this.listaTipoPonto = data);
    this.service.Get<Posicao[]>('posicao/BuscarTodos').subscribe(data => this.listaPosicao = data);
  }

  aposIniciar() {
    let listaPenalidadeRetorno: number[] = [];
    let listaTipoPontoRetorno: number[] = [];
    let listaPosicaoRetorno: number[] = [];

    this.objetoRetorno.penalidade.forEach(element => {
      listaPenalidadeRetorno.push(element.id);
    });
    this.objetoRetorno.tipoPonto.forEach(element => {
      listaTipoPontoRetorno.push(element.id);
    });
    this.objetoRetorno.posicao.forEach(element => {
      listaPosicaoRetorno.push(element.id);
    });

    this.formulario.get('penalidade').setValue(listaPenalidadeRetorno);
    this.formulario.get('tipoPonto').setValue(listaTipoPontoRetorno);
    this.formulario.get('posicao').setValue(listaPosicaoRetorno);
  }
  Finalizar() {
    let modalidade = new Modalidade(this.formulario.value);
    modalidade.AdicionarPenalidade(this.formulario.get('penalidade').value);
    modalidade.AdicionarTipoPonto(this.formulario.get('tipoPonto').value);
    modalidade.AdicionarPosicao(this.formulario.get('posicao').value);
    this.Persistir<Modalidade>(modalidade);
  }
}