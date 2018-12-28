import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { Evento } from '../../../model/evento.model';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  animations: [routerTransition()]
})
export class EquipeComponent extends BaseComponent {
  
  abrirEquipe: boolean = false;
  listaEvento: Evento[] = [];
  idEvento: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Código Equipe', nomeValorColuna: 'codigoEquipe' },
    { nomeColuna: 'Capitão Equipe', nomeValorColuna: 'capitao' }
  ];

  iniciar() {
    this.service.Get<Evento[]>('evento/BuscarTodos').subscribe(object => {
      this.listaEvento = object;
    });
  }

  BuscarEquipe() {
    this.abrirEquipe = false;
    setTimeout(() => { this.abrirEquipe = true }, 5);
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      if (x.capitao)
        x.capitao = x.capitao.nome;
      else
      x.capitao = 'N/A';
    });
    return lista;
  }
}