import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { isNullOrUndefined } from 'util';
import { DadosTabela } from '../../../../../model/tabela';
import { Alerta } from '../../../../../model/alerta.model';
import { TipoAlerta } from '../../../../../enum/sisgesport.enum';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss']
})
export class InsercaoComponent extends BaseEtapaComponent {
  @Input() listaJogador: any[];
  @Input() listaPosicao: any[];
  @Input() listaAluno: any[];
  @Input() sexo: string;
  mesmoSexo: boolean;
  desabilitar: boolean = true;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome Aluno', nomeValorColuna: 'nome' },
    { nomeColuna: 'Nº Camisa', nomeValorColuna: 'numCamisa' },
    { nomeColuna: 'Posicao', nomeValorColuna: 'posicao' },
    { nomeColuna: 'Sexo', nomeValorColuna: 'sexo' }
  ];

  iniciar() {   }

  validar(lista: any[]): boolean {
    let retorno: boolean = true;
    if (lista.length > 0) {
      let aluno = this.ObterItemPorId(this.listaAluno, this.formulario.get('jogador.id').value);
      if (this.sexo !== aluno.sexo ) {
        this.alerta = new Alerta(1, TipoAlerta[4], 'Sexo do jogador diferente do permitido para o time!');
        return false;
      }
      let objetoVerificacao = lista.find(x => x.id == aluno.id);
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
        if (!isNullOrUndefined(retorno.id_posicao > 0))
          data.posicao = this.ObterItemPorId(this.listaPosicao, data.id_posicao)['nome'];
        data.sexo = retorno.sexo;
      }
    });
    return lista;
  }
}
