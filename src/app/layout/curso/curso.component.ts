import { Instituicao } from './../../model/instituicao.model';
import { BaseComponent } from './../../base/base.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DadosTabela } from '../../model/tabela';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  animations: [routerTransition()]
})
export class CursoComponent extends BaseComponent {
  listaInstituicao: Instituicao[] = [];
  idInstituicao: number;
  abrirCurso: boolean = false;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Ativo', nomeValorColuna: 'flg_ativo' },
    { nomeColuna: 'Instituição', nomeValorColuna: 'instituicao' }
  ];

  iniciar() {
    this.service.Get<Instituicao[]>('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object;
    });
  }

  executar(lista: any[]): any[] {
    lista.forEach(x => {
      if (x.flg_ativo)
        x.flg_ativo = 'Sim'
      else
        x.flg_ativo = 'Não'
      x.instituicao = x.instituicao.nome
    });
    return lista;
  }

  BuscarCursos() {
    this.abrirCurso = false;
    setTimeout(() => { this.abrirCurso = true }, 5);
  }
}
