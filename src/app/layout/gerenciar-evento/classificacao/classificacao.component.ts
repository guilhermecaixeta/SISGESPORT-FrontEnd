import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.scss'],
  animations: [routerTransition()]
})
export class ClassificacaoComponent extends BaseComponent {

  abrirTime: boolean = false;
  listaEvento: any[] = [];
  listaModalidade: any[] =[];

  idEvento: number;
  idModalidade: number;
  data: string;
  listaNomeCampo: DadosTabela[] = [
    {nomeColuna:'#', nomeValorColuna:'index'},
    {nomeColuna:'Equipe', nomeValorColuna:'equipe'},
    { nomeColuna: 'Vitória', nomeValorColuna: 'numVitoria' },
    { nomeColuna: 'Derrota', nomeValorColuna: 'numDerrota' },
    { nomeColuna: 'Empate', nomeValorColuna: 'numEmpate' },
    { nomeColuna: 'Pontuação', nomeValorColuna: 'pontuacao' }
  ];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => {
      this.listaEvento = object.data;
    });
  }
  
  BuscarModalidade(){
    let evento = this.ObterItemPorId(this.listaEvento, this.idEvento);
    evento.eventoModalidade.forEach(x => {
      x.modalidade.nome = `${x.modalidade.nome} - ${x.sexo}`;
      x.modalidade.sexo = x.sexo;
      this.listaModalidade.push(x.modalidade);
    });
  }

  BuscarTime() {
    this.abrirTime = false;
    let modal = this.ObterItemPorId(this.listaModalidade, this.idModalidade);
    this.data = `${this.idEvento}\\${modal.id}\\${modal.sexo}`;
    setTimeout(() => { this.abrirTime = true }, 5);
  }

  executar(lista: any[]): any[] {
    let count = 1;
    lista.forEach(x => {
      x.equipe = x.equipe.nome;
      x.index = count;
      count++;
    });
    return lista;
  }
}