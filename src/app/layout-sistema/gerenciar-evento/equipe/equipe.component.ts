import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss'],
  animations: [routerTransition()]
})
export class EquipeComponent extends BaseComponent {
  
  abrirEquipe: boolean = false;
  listaEvento: any[] = [];
  idEvento: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Código Equipe', nomeValorColuna: 'codigoEquipe' },
    { nomeColuna: 'Capitão Equipe', nomeValorColuna: 'capitao' }
  ];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => {
      this.listaEvento = object.data;
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