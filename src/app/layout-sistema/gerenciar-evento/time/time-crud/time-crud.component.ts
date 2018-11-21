import { Component, OnInit } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';

@Component({
  selector: 'app-time-crud',
  templateUrl: './time-crud.component.html',
  styleUrls: ['./time-crud.component.scss']
})
export class TimeCrudComponent extends BaseCrudComponent {

  rota: string = 'time';
  value: boolean = false;
  validacaoCustomizada = true;

  listaJogador: any[] = [];
  listaPosicao: any[] = [];
  listaAluno: any[] = [];

  formulario = this.construtorFormulario.group({
    time: this.construtorFormulario.group({
      numVitoria: [],
      numDerrota: [],
      numEmpate: [],
      pontuacao: [],
      id: []
    }),
    jogador: this.construtorFormulario.group({
      id_posicao: [],
      numCamisa: [],
      id_aluno: [],
      id: []
    })
  });

  validarEtapa() {
  }

  iniciar() {
    this.multiValidacao.formulario = this.formulario;

  }

  aposIniciar() {

  }

  finalizar() {
  }
}