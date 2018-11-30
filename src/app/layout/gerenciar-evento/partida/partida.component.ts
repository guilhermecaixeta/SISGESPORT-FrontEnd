import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss'],
  animations: [routerTransition()]
})
export class PartidaComponent extends BaseComponent {
  abrirPartida: boolean = false;
  listaEvento: any[] = [];
  listaEquipe: any[] = [];
  idEvento: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Time', nomeValorColuna: 'timeCasa' },
    { nomeColuna: 'Contra', nomeValorColuna: 'contra' },
    { nomeColuna: 'Time', nomeValorColuna: 'timeVisita' },
    { nomeColuna: 'Modalidade', nomeValorColuna: 'modalidade' }
  ];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => this.listaEvento = object.data);
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      x.timeCasa = x.timeCasa.equipe.nome;
      x.timeVisita = x.timeVisita.equipe.nome;
      x.modalidade = x.modalidade.nome;
      x.contra = "x";
    });
    return lista;
  }

  BuscarPartida() {
    this.abrirPartida = false;
    setTimeout(() => { this.abrirPartida = true }, 5);
  }
}
