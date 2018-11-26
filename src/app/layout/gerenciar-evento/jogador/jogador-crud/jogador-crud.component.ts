import { Aluno } from './../../../../model/aluno.model';
import { BaseCrudComponent } from './../../../../base/base-crud.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-jogador-crud',
  templateUrl: './jogador-crud.component.html',
  styleUrls: ['./jogador-crud.component.scss'],
  animations: [routerTransition()]
})
export class JogadorCrudComponent extends BaseCrudComponent {
  value: boolean = false;
  rota = 'jogador';
  aluno: Aluno;

  listaPonto: any[] = [];
  listaPosicao: any[] = [];
  listaPartida: any[] = [];
  listaPenalidade: any[] = [];
  listaPartidaPonto: any[] = [];
  listaPartidaPenalidade: any[] = [];

  formulario = this.construtorFormulario.group({
    jogador: this.construtorFormulario.group({
      id: [],
      numCamisa: [],
      idPosicao: []
    }),
    ponto: this.construtorFormulario.group({
      idPartida: [],
      idPonto: []
    }),
    penalidade: this.construtorFormulario.group({
      idPenalidade: [],
      idPartida: []
    })
  });

  iniciar() {

  }

  aposIniciar() {
    let idModalidade = this.objetoRetorno.time.modalidade.id;
    let idEvento = this.objetoRetorno.time.equipe.evento.id;
    this.service.Get('posicao/BuscarPorModalidadeId', idModalidade)
      .subscribe(object => this.listaPosicao = object.data);
    this.service.Get('tipoPonto/BuscarPorModalidadeId', idModalidade)
      .subscribe(object => this.listaPonto = object.data);
    this.service.Get('penalidade/BuscarPorModalidadeId', idModalidade)
      .subscribe(object => this.listaPenalidade = object.data);
    this.service.Get('partida/BuscarPorEventoIdEModalidadeId', `${idEvento}/${idModalidade}`)
      .subscribe(object => this.listaPartida = object.data);
    this.formulario.get('jogador.numCamisa').setValue(this.objetoRetorno.numCamisa);
    this.formulario.get('jogador.idPosicao').setValue(this.objetoRetorno.posicao.id);
    this.aluno = this.objetoRetorno.jogador;
  }
  
  finalizar(){}
}
