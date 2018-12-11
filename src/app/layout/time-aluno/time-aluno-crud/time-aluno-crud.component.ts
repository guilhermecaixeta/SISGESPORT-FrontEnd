import { Jogador } from './../../../model/jogador.model';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../base';
import { Validators } from '@angular/forms';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-time-aluno-crud',
  templateUrl: './time-aluno-crud.component.html',
  styleUrls: ['./time-aluno-crud.component.scss'],
  animations: [routerTransition()]
})
export class TimeAlunoCrudComponent extends BaseCrudComponent {

  rota: string = 'time';
  value: boolean = false;

  listaJogador: any[] = [];
  listaPosicao: any[] = [];
  listaAluno: any[] = [];

  formulario = this.construtorFormulario.group({
    id_posicao: [null, [Validators.required]],
    numCamisa: [null, [Validators.required]],
    idAluno: [null],
    id_time: [null],
    id: [null]
  });

  aposIniciar() {
    this.service.Get('posicao/BuscarPorModalidadeId', this.objetoRetorno.eventoModalidade.modalidade.id).subscribe(object => {
      this.listaPosicao = object.data;
    });
    this.service.Get('aluno/BuscarPorIdEquipe', this.objetoRetorno.equipe.id).subscribe(object => {
      this.listaAluno = object.data;
    });
    if (this.objetoRetorno.jogador.length > 0) {
      this.listaJogador = this.objetoRetorno.jogador;
      this.listaJogador.map(jogador => {
        jogador.nome = jogador.jogador.nome;
        jogador.sexo = jogador.jogador.sexo;
        jogador.posicao = jogador.posicao.nome;
      });
    }

    this.observablePadrao.getValue.subscribe(x => {
      if (x) {
        this.formulario.get('idAluno').setValue(x.data.id);
      }
    });
    this.formulario.get('id_time').setValue(+this.id);
  }

  Finalizar() {
    let jogador = new Jogador(this.formulario.value);
    this.Persistir<Jogador>(jogador, 'aluno/AdicionarJogador', 'cadastrar');
  }
}