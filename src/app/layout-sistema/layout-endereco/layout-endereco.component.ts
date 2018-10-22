import { Component } from '@angular/core';
import { BaseEtapaComponent } from '../../base';

@Component({
  selector: 'app-layout-endereco',
  templateUrl: './layout-endereco.component.html',
  styleUrls: ['./layout-endereco.component.scss']
})
export class LayoutEnderecoComponent extends BaseEtapaComponent {
  estadosLista: any[];
  municipioLista: any[];

  iniciar(){
    this.service.Get('estado/BuscarTodos').subscribe(object => {
      this.estadosLista = object.data;
    });
    this.formulario.get('estado').valueChanges.subscribe(id =>{
      this.service.Get('municipio/BuscarPorIdEstado', id).subscribe(object => this.municipioLista = object.data);
    });
  }
}

