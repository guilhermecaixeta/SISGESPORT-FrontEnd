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

  @Input() route: string = "";
  @Input() useRoute: boolean = true;
  @Input() dataRoute: any;
  @Input() field: string = "id";
  @Input() legenda: string = '';
  @Input() listaValorCampo: any[] = [];
  @Input() listaNomeCampo: DadosTabela[] = [];
  @Input() funcaoEspecifica: any = null;
  @Input() desabilitarEdicao: boolean = false;
  @Input() desabilitarVisualizacao: boolean = false;
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
    order: "id",
    sort: "DESC",
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
        order: "id",
        sort: "DESC",
      });
    }
  }

  /**
   * Obtem uma lista atualizada do back-end.
   * @param pageConfig Configuracao da paginacao
   */
  ObterLista(pageConfig: any) {
    let listaDados;
    if (this.useRoute) {
      this.service.Get(this.route, this.dataRoute, pageConfig).subscribe(data => {
        this.pageConfig.totalElements = data.data.totalElements;
        listaDados = data.data.content;
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
                order: "id",
                sort: "DESC",
              })
            },
            err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err)));
        break;
    }
  }
}
