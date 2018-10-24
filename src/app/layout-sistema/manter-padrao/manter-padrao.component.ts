import { BaseComponent } from './../../base/base.component';
import { Component, Input } from '@angular/core';
import { DadosTabela } from '../../model/tabela';

@Component({
  selector: 'app-manter-padrao',
  templateUrl: './manter-padrao.component.html',
  styleUrls: ['./manter-padrao.component.scss']
})
export class ManterPadraoComponent extends BaseComponent {

  /**
   * Nome da rota da funcionalidade. Ex: curso, instituicao...
   */
  @Input() rota: string;
  /**
   * Valor a ser adicionado na rota caso ela pesquise por um valor padrão
   */
  @Input() dataRoute: any;
  /**
   * Rota padrão para obter valores paginados.
   */
  @Input() rotaPadrao: string = "BuscarTodosPaginavel";
  /**
   * Campo padrão para a ordenação
   */
  @Input() field: string = "id";
  /**
   * Legenda a aparecer na tabela
   */
  @Input() legendaTabela: string = '';
  /**
   * Lista de valor a ser exibida na gridview.
   */
  @Input() listaValorCampo: any[] = [];
  /**
   * Lista com os nomes dos campos a ser exibida na gridview.
   */
  @Input() listaNomeCampo: DadosTabela[] = [];
  /**
   * Legenda do botão.
   */
  @Input() legenda: string = 'Adicionar';
  /**
   * Objeto contendo uma função expecifica a ser executada sempre que a gridview for atualizada.
   */
  @Input() funcaoEspecifica: any = null;

  /**
   * Variavel usada para exibir a grid.
   */
  @Input() exibirGrid: boolean = true;
  rotaGrid: string;
  iniciar(){
   this.rotaGrid = `${this.rota}/${this.rotaPadrao}`;
  }
}
