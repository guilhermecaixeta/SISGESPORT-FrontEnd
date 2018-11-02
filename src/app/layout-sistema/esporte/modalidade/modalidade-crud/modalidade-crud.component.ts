import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { Validators } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { Modalidade } from '../../../../model/modalidade.model';

@Component({
  selector: 'app-modalidade-crud',
  templateUrl: './modalidade-crud.component.html',
  styleUrls: ['./modalidade-crud.component.scss'],
  animations: [routerTransition()]
})
export class ModalidadeCrudComponent extends BaseCrudComponent {
  value: boolean = false;
  rota = 'modalidade';
  listaPosicao: any[];
  listaPenalidade: any[];
  listaTipoPonto: any[];

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(30)]],
    descricao: [null, [Validators.required, Validators.maxLength(60)]],
    numMaxJogador: [1, [Validators.required]],
    numMinJogador: [1, [Validators.required]],
    penalidade: [null, [Validators.required]],
    posicao: [null, [Validators.required]],
    tipoPonto: [null, [Validators.required]]
  });

  iniciar() {
    this.service.Get('penalidade/BuscarTodos').subscribe(data => this.listaPenalidade = data.data);
    this.service.Get('tipoPonto/BuscarTodos').subscribe(data => this.listaTipoPonto = data.data);
    this.service.Get('posicao/BuscarTodos').subscribe(data => this.listaPosicao = data.data);
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
  finalizar() {
    let modalidade = new Modalidade(this.formulario.value);
    modalidade.AdicionarPenalidade(this.formulario.get('penalidade').value);
    modalidade.AdicionarTipoPonto(this.formulario.get('tipoPonto').value);
    modalidade.AdicionarPosicao(this.formulario.get('posicao').value);
    this.Persistir<Modalidade>(modalidade);
  }
}