import { InformacaoEvento } from './../../../../model/informacao-evento.model';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-informacao-evento-crud',
  templateUrl: './informacao-evento-crud.component.html',
  styleUrls: ['./informacao-evento-crud.component.scss'],
  animations: [routerTransition()]
})
export class InformacaoEventoCrudComponent extends BaseCrudComponent {

  rota: string = 'informacaoEvento';
  value: boolean = false;
  listaEvento: any[] = [];
  listaImagem: any[] = [];

  formulario = this.construtorFormulario.group({
    id: [],
    tipoInformacao: [],
    titulo: [],
    descricao: [],
    evento: []
  });

  iniciar() {
    this.service.Get('evento/BuscarTodos').subscribe(object => {
      this.listaEvento = object.data;
    });
  }

  aposIniciar() {
    this.formulario.get('evento').setValue(this.objetoRetorno.evento.id);
  }

  Finalizar() {
    let informacao = new InformacaoEvento(this.formulario.value);
    this.Persistir<InformacaoEvento>(informacao);
  }
}
