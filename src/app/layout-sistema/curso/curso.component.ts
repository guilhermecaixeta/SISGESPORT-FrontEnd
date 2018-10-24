import { BaseComponent } from './../../base/base.component';
import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DadosTabela } from '../../model/tabela';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
  animations: [routerTransition()]
})
export class CursoComponent extends BaseComponent {
  listaInstituicao: any[] = [];
  idInstituicao: number;
  abrirCurso: boolean = false;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Ativo', nomeValorColuna: 'flg_ativo' },
    { nomeColuna: 'Instituição', nomeValorColuna: 'instituicao' }
  ];

  funcaoEspecifica = {
    executar: (lista: any[]) => this.executar(lista)
  }

  iniciar() {
    this.service.Get('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object.data;
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
    setTimeout(() => {this.abrirCurso = true}, 5);
  }
}
