import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { BaseComponent } from '../../../base';
import { DadosTabela } from '../../../model/tabela';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  animations: [routerTransition()]
})
export class TimeComponent extends BaseComponent {

  abrirTime: boolean = false;
  listaEvento: any[] = [];
  listaEquipe: any[] = [];
  idEvento: number;
  idEquipe: number;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Modalidade', nomeValorColuna: 'modalidade' },
    { nomeColuna: 'Vitória', nomeValorColuna: 'numVitoria' },
    { nomeColuna: 'Derrota', nomeValorColuna: 'numDerrota' },
    { nomeColuna: 'Empate', nomeValorColuna: 'numEmpate' },
    { nomeColuna: 'Pontuação', nomeValorColuna: 'pontuacao' }
  ];

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => this.listaEvento = object.data);
  }

  BuscarEquipe() {
    this.service.Get('equipe/BuscarEquipePorIdEvento', this.idEvento).subscribe(object => {
      this.listaEquipe = object.data;
    });
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      x.modalidade = x.modalidade.nome;
    });
    return lista;
  }

  BuscarTime() {
    this.abrirTime = false;
    setTimeout(() => { this.abrirTime = true }, 5);
  }
}
