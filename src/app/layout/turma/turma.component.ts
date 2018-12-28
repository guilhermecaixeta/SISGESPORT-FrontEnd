import { Curso } from './../../model/curso.model';
import { Component } from '@angular/core';
import { BaseComponent } from '../../base';
import { DadosTabela } from '../../model/tabela';
import { routerTransition } from '../../router.animations';
import { Instituicao } from '../../model/instituicao.model';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  animations: [routerTransition()]
})
export class TurmaComponent extends BaseComponent {
  listaInstituicao: Instituicao[] = [];
  listaCurso: any[] = [];

  idInstituicao: number;
  idCurso: number;
  abrirTurma: boolean = false;

  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Data início', nomeValorColuna: 'dataInicial' },
    { nomeColuna: 'Data limite', nomeValorColuna: 'dataLimite' },
    { nomeColuna: 'Ativo', nomeValorColuna: 'flgAtivo' },
    { nomeColuna: 'Curso', nomeValorColuna: 'curso' }
  ];

  iniciar() {
    this.service.Get<Instituicao[]>('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object;
    });
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      if (x.flgAtivo)
        x.flgAtivo = 'Sim'
      else
        x.flgAtivo = 'Não'
      x.curso = x.curso.nome;
    });
    return lista;
  }

  BuscarCurso() {
    if (this.idInstituicao)
      this.service.Get<Curso[]>('curso/BuscarCursoPorIdInstituicao', this.idInstituicao).subscribe(object => {
        this.listaCurso = object;
        this.idCurso = 0;
        this.abrirTurma = false;
      });
  }

  BuscarTurma() {
    this.abrirTurma = false;
    setTimeout(() => { this.abrirTurma = true }, 5);
  }
}
