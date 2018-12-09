import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';
import { isNullOrUndefined } from 'util';
import { PerfilSistema } from '../../../enum/sisgesport.enum';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss'],
  animations: [routerTransition()]
})
export class PartidaComponent extends BaseComponent {
  abrirPartida: boolean = false;
  isAdmin: boolean = false;
  listaEvento: any[] = [];
  listaEquipe: any[] = [];
  idEvento: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Time', nomeValorColuna: 'timeCasa' },
    { nomeColuna: 'Contra', nomeValorColuna: 'contra' },
    { nomeColuna: 'Time', nomeValorColuna: 'timeVisita' },
    { nomeColuna: 'Modalidade', nomeValorColuna: 'modalidade' },
    { nomeColuna: 'Sexo', nomeValorColuna: 'sexo' }
  ];

  iniciar() {
    this.observablePadrao.getValue.subscribe(x => {
      if (!isNullOrUndefined(x.data) && !isNullOrUndefined(x.data.authorities.find(x => x.authority == PerfilSistema.ROLE_ADMIN)))
        this.isAdmin = true;
    });
    this.service.Get('evento/BuscarTodos').subscribe(object => this.listaEvento = object.data);
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      x.timeCasa = x.timeCasa.equipe.nome;
      x.timeVisita = x.timeVisita.equipe.nome;
      x.modalidade = x.eventoModalidade.modalidade.nome;
      x.contra = "x";
      x.sexo = x.eventoModalidade.sexo;
    });
    return lista;
  }

  BuscarPartida() {
    this.abrirPartida = false;
    setTimeout(() => { this.abrirPartida = true }, 5);
  }
}
