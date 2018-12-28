import { TipoAlerta } from './../../../enum/sisgesport.enum';
import { BaseComponent } from './../../../base/base.component';
import { DadosTabela } from '../../../model/tabela';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Alerta } from '../../../model/alerta.model';

@Component({
  selector: 'app-tabela-basica',
  templateUrl: './tabela-basica.component.html',
  styleUrls: ['./tabela-basica.component.scss']
})
export class TabelaBasicaComponent extends BaseComponent {

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
  /**
   * Rota a ser usada para obter os dados da lista
   */
  @Input() route: string = "";
  /**
   * Variavel usada para identificar se os dados serão obtidos através da rota
   */
  @Input() useRoute: boolean = true;
  /**
   * Dado usado para obter os registros 
   */
  @Input() dataRoute: any;
  /**
   * Nome do atributo do objeto que será utilizado para as ações de editar e visualizar
   */
  @Input() field: string = "id";
  /**
   * Legenda a ser exibida
   */
  @Input() legenda: string = '';
  /**
   * Lista com os registros a serem exibidos na grid
   */
  @Input() listaValorCampo: any[] = [];
  /**
   * Lista contando o cabeçalho e o nome do atributo a ser exibido na grid
   */
  @Input() listaNomeCampo: DadosTabela[] = [];
  /**
   * Objeto que contém funções especificas de cada componente que utiliza a grid para exibição de registro
   */
  @Input() funcaoEspecifica: any = null;
  /**
   * Desabilita o botão de edição
   */
  @Input() desabilitarEdicao: boolean = false;
  /**
   * Desabilita o botão de visualização
   */
  @Input() desabilitarVisualizacao: boolean = false;
  /**
   * Desabilita o bot]ao de deleção
   */
  @Input() desabilitarDelecao: boolean = false;
  /**
   * Retorna os dados para realizar uma deleção customizada.
   */
  @Output() acaoTabela: EventEmitter<any> = new EventEmitter<any>();
  paginaAnterior: number = 0;

  pageConfig = {
    totalElements: 0,
    page: 0,
    size: 10,
    order: this.order,
    sort: this.sort,
  };

  ngOnInit() {
    this.ObterLista(this.pageConfig);
  }

  /**
   * Atualiza a lista sempre que a paginacao for mudada.
   * @param event 
   */
  AtualizarLista(event: any) {
    this.paginaAnterior = this.pageConfig.page - 1;
    if (this.paginaAnterior != this.pageConfig.page) {
      this.ObterLista({
        totalElements: 0,
        page: this.paginaAnterior,
        size: 10,
        order: this.order,
        sort: this.sort,
      });
    }
  }

  /**
   * Obtem uma lista atualizada do back-end.
   * @param pageConfig Configuracao da paginacao
   */
  ObterLista<T>(pageConfig: any) {
    let listaDados;
    if (this.useRoute) {
      this.service.Get<T>(this.route, this.dataRoute, pageConfig).subscribe(data => {
        this.pageConfig.totalElements = data['totalElements'];
        listaDados = data['content'];
        if (this.funcaoEspecifica != null)
          this.listaValorCampo = this.funcaoEspecifica.executar(listaDados);
        else
          this.listaValorCampo = listaDados;
      },
        err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err)));
    } else {
      this.listaValorCampo = this.funcaoEspecifica.executar(this.listaValorCampo);
    }
  }
  /**
   * Metodo para ação da gridview
   * @param event objeto de entrada
   */
  AcaoGrid(event: any, data: any, index: any) {
    switch (event.currentTarget.id) {
      case "editar":
        this.acaoTabela.emit(Object.assign({}, { acao: 'editar', index: index }, data));
        this.router.navigate(['./editar', data[this.field]], { relativeTo: this.activatedRoute });
        break;
      case "visualizar":
        this.acaoTabela.emit(Object.assign({}, { acao: 'visualizar', index: index }, data));
        this.router.navigate(['./visualizar', data[this.field]], { relativeTo: this.activatedRoute });
        break;
      case "deletar":
        this.acaoTabela.emit(Object.assign({}, { acao: 'deletar', index: index }, data));
        if (this.useRoute)
          this.service.Delete(this.route.replace(/\/.*/g, ''), data[this.field]).subscribe(
            () => {
              this.ObterLista({
                totalElements: 0,
                page: this.paginaAnterior,
                size: 10,
                order: this.order,
                sort: this.sort,
              })
            },
            err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err)));
        break;
    }
  }
}
