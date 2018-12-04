import { Component } from '@angular/core';
import { BaseComponent } from '../../base';
import { DadosTabela } from '../../model/tabela';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-time-aluno',
  templateUrl: './time-aluno.component.html',
  styleUrls: ['./time-aluno.component.scss'],
  animations: [routerTransition()]
})
export class TimeAlunoComponent extends BaseComponent {

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
    this.observablePadrao.getValue.subscribe(data => {
      if (data)
        this.service.Get('equipe/BuscarEquipePorIdAluno', data.data.id).subscribe(object => {
          this.listaEquipe = object.data;
        });
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
