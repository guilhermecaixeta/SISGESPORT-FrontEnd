import { Jogador } from './../../../../model/jogador.model';
import { Aluno } from './../../../../model/aluno.model';
import { BaseCrudComponent } from './../../../../base/base-crud.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { isNullOrUndefined } from 'util';

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
      idAluno: [],
      numCamisa: [],
      id_posicao: []
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

  aposIniciar() {
    let idModalidade = this.objetoRetorno.time.eventoModalidade.modalidade.id;
    let idEvento = this.objetoRetorno.time.equipe.evento.id;
    if (!isNullOrUndefined(this.objetoRetorno) && this.objetoRetorno.partidaPenalidade.length > 0)
      this.objetoRetorno.partidaPenalidade.forEach(x => {
        x.idPenalidade = x.penalidade.id;
        x.idPartida = x.partida.id;
        x.penalidade = x.penalidade.nome;
        let nome = `${x.partida.timeCasa.equipe.nome} x ${x.partida.timeVisita.equipe.nome}`;
        x.partida = nome;
        this.listaPartidaPenalidade.push(x);
      });
debugger
      if (!isNullOrUndefined(this.objetoRetorno) && this.objetoRetorno.partidaPonto.length > 0)
      this.objetoRetorno.partidaPonto.forEach(x => {
        x.idPonto = x.tipoPonto.id;
        x.idPartida = x.partida.id;
        x.valor = x.tipoPonto.valor;
        let nome = `${x.partida.timeCasa.equipe.nome} x ${x.partida.timeVisita.equipe.nome}`;
        x.partida = nome;
        this.listaPartidaPonto.push(x);
      });

    this.service.Get('posicao/BuscarPorModalidadeId', idModalidade)
      .subscribe(object => this.listaPosicao = object.data);
    this.service.Get('tipoPonto/BuscarPorModalidadeId', idModalidade)
      .subscribe(object => this.listaPonto = object.data);
    this.service.Get('penalidade/BuscarPorModalidadeId', idModalidade)
      .subscribe(object => this.listaPenalidade = object.data);
    this.service.Get('partida/BuscarPorEventoIdEModalidadeId', `${idEvento}/${idModalidade}`)
      .subscribe(object => this.listaPartida = object.data);
    this.formulario.get('jogador.numCamisa').setValue(this.objetoRetorno.numCamisa);
    this.formulario.get('jogador.id_posicao').setValue(this.objetoRetorno.posicao.id);
    this.formulario.get('jogador.id').setValue(this.objetoRetorno.id);
    this.formulario.get('jogador.idAluno').setValue(this.objetoRetorno.jogador.id);
    this.aluno = this.objetoRetorno.jogador;
  }

  Finalizar() {
    let jogador = new Jogador(this.formulario.value.jogador);
    jogador.adicionarPartidaPonto(this.listaPartidaPonto);
    jogador.adicionarPartidaPenalidade(this.listaPartidaPenalidade);
    this.Persistir<Jogador>(jogador);
  }
}
