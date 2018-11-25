import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';
import { Time } from '../../../../model/time.model';

@Component({
  selector: 'app-time-crud',
  templateUrl: './time-crud.component.html',
  styleUrls: ['./time-crud.component.scss'],
  animations: [routerTransition()]
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
      numVitoria: [null, [Validators.required]],
      numDerrota: [null, [Validators.required]],
      numEmpate: [null, [Validators.required]],
      pontuacao: [null, [Validators.required]],
      id: []
    }),
    jogador: this.construtorFormulario.group({
      id_posicao: [null, [Validators.required]],
      numCamisa: [null, [Validators.required]],
      id: [null, [Validators.required]]
    })
  });

  validarEtapa() {
    if (this.formulario.get('time').valid)
      this.multiValidacao.eValido = true;
    else this.multiValidacao.eValido = false;
  }

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
  }

  aposIniciar() {
    this.service.Get('posicao/BuscarPorModalidadeId', this.objetoRetorno.modalidade.id).subscribe(object => {
      this.listaPosicao = object.data;
    });
    this.service.Get('aluno/BuscarPorIdEquipe', this.objetoRetorno.equipe.id).subscribe(object => {
      this.listaAluno = object.data;
    });
    this.formulario.get('time').patchValue(this.objetoRetorno);
    if (this.objetoRetorno.jogador.length > 0) {
      this.listaJogador = this.objetoRetorno.jogador;
      this.listaJogador.map(jogador => {
        jogador.nome = jogador.jogador.nome;
        jogador.sexo = jogador.jogador.sexo;
        jogador.posicao = jogador.posicao.nome;
      });
    }
  }

  finalizar() {
    let time = new Time(this.formulario.get('time').value);
    time.AdicionarListaJogador(this.listaJogador);
    this.Persistir<Time>(time);
  }
}