import { BaseComponent } from './../../../base/base.component';
import { DadosTabela } from '../../../model/tabela';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-basica',
  templateUrl: './tabela-basica.component.html',
  styleUrls: ['./tabela-basica.component.scss']
})
export class TabelaBasicaComponent extends BaseComponent {

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
        this.router.navigate(['./editar', data[this.field]], { relativeTo: this.activatedRoute });
        break;
      case "visualizar":
        this.router.navigate(['./visualizar', data[this.field]], { relativeTo: this.activatedRoute });
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
