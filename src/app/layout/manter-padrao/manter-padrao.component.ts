import { BaseComponent } from './../../base/base.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DadosTabela } from '../../model/tabela';

@Component({
  selector: 'app-manter-padrao',
  templateUrl: './manter-padrao.component.html',
  styleUrls: ['./manter-padrao.component.scss']
})
export class ManterPadraoComponent extends BaseComponent {

  /**
   * Desabilita todas as ações.
   */
  @Input() desabilitarAcao: boolean = false;
  /**
  * Tipo de ordenação a ser usada
  */
  @Input() sort: string = "DESC";
  /**
   * Atributo usado para a ordenação
   */
  @Input() order: string = "id";
  @Output() acaoTabela: EventEmitter<any> = new EventEmitter<any>();
  @Input() desabilitarEdicao: boolean = false;
  @Input() desabilitarVisualizacao: boolean = false;
  @Input() desabilitarDelecao: boolean = false;
  /**
   * Variavel usada para habilitar o botão adicionar.
   */
  @Input() desabilitarAdicionar: boolean = false;
  /**
   * Variavel par o uso da rota 
   */
  @Input() useRoute: boolean = true;
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
  iniciar() {
    if (this.rota)
      this.rotaGrid = `${this.rota}/${this.rotaPadrao}`;
  }

  emitirAcao(event: any) {
    this.acaoTabela.emit(event);
  }
}
