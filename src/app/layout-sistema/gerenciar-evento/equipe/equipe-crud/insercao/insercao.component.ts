import { isNullOrUndefined } from 'util';
import { Component, Input } from '@angular/core';
import { DadosTabela } from '../../../../../model/tabela';
import { BaseEtapaComponent } from '../../../../../base';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss']
})
export class InsercaoComponent extends BaseEtapaComponent {
  @Input() cor: string;
  @Input() listaTurma: any[];
  @Input() listaCurso: any[];
  @Input() listaAluno: any[];
  @Input() listaAlunoEquipe: any[];
  @Input() dadosAluno: { nome: string, curso: string };

  desabilitar: boolean = true;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome Aluno', nomeValorColuna: 'nome' },
    { nomeColuna: 'Turma', nomeValorColuna: 'turma' },
    { nomeColuna: 'Curso', nomeValorColuna: 'curso' }
  ];

  iniciar() { }

  validar(lista: any[]): boolean {
    let retorno: boolean = true;
    if (lista.length > 0) {
      let objetoVerificacao = lista.find(x => x.id == this.formulario.get('aluno.id').value);
      if (isNullOrUndefined(objetoVerificacao))
        retorno = true;
      else
        retorno = false;
    }
    return retorno;
  }

  executar(lista: any[]): any[] {
    lista.map(data => {
      let retorno = this.ObterItemPorId(this.listaAluno, data.id);
      if (!isNullOrUndefined(retorno)) {
        if (!isNullOrUndefined(retorno.nome))
          data.nome = retorno.nome;
        if (!isNullOrUndefined(retorno.turma)) {
          data.curso = retorno.turma.curso.nome;
          data.turma = retorno.turma.nome;
        }
      }
    });
    return lista;
  }
}