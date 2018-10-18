import { Service } from './../../../service/service.component';
import { DadosTabela } from './../../../entity/tabela';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-basica',
  templateUrl: './tabela-basica.component.html',
  styleUrls: ['./tabela-basica.component.scss']
})
export class TabelaBasicaComponent implements OnInit {

  @Input() route: string = "";
  @Input() dataRoute: any;
  @Input() field: string = "id";
  @Input() legenda: string = '';
  @Input() listaValorCampo: any[] = [];
  @Input() listaNomeCampo: DadosTabela[] = [];
  paginaAnterior: number = 0;

  pageConfig = {
    totalElements: 0,
    page: 0,
    size: 10,
    order: "id",
    sort: "DESC",
  };

  constructor(private service: Service) { }

  ngOnInit() {
    if (this.listaValorCampo.length == 0)
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
    if (this.route !== "")
      this.service.Get(this.route, this.dataRoute, pageConfig).subscribe(data => {
        this.pageConfig.totalElements = data.data.totalElements;
        this.listaValorCampo = data.data.content;
      });
  }
  /**
   * Metodo para ação da gridview
   * @param event objeto de entrada
   */
  AcaoGrid(event: any, data: any) {
    switch (event.currentTarget.id) {
      case "editar":
        break;
      case "visualizar":
        break;
      case "deletar":
        this.service.Delete(this.route.replace(/\/.*/g, ''), data[this.field]).subscribe(
          () => this.ObterLista({
            totalElements: 0,
            page: this.paginaAnterior,
            size: 10,
            order: "id",
            sort: "DESC",
          }),
          err => console.log('Erro ao excluir', err)
        );
        break;
    }
  }
}
