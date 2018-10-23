import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../base';
import { routerTransition } from '../../../router.animations';
import { Cargo } from './../../../model/cargo.model';

@Component({
  selector: 'app-cargo-crud',
  templateUrl: './cargo-crud.component.html',
  styleUrls: ['./cargo-crud.component.scss'],
  animations: [routerTransition()]
})
export class CargoCrudComponent extends BaseCrudComponent {
  rota = 'cargo';
  value: boolean = false;
  listaInstituicao: any[];
  
  formulario = this.construtorFormulario.group({
    nome: [null, [Validators.required, Validators.maxLength(50)]],
    descricao: [null, [Validators.required, Validators.maxLength(255)]],
    instituicao_cargo: [null, [Validators.required]]
  })

  iniciar() {
    this.service.Get('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object.data;
    });
  }

  aposIniciar() {
    let listaIdInstituicao: number[] = [];
    this.objetoRetorno.instituicao.forEach(element => {
      listaIdInstituicao.push(element.id);
    });
    this.formulario.get('instituicao_cargo').setValue(listaIdInstituicao);
  }

  finalizar(){
    let cargo = new Cargo(this.formulario.value);
    cargo.adicionarInstituicao(this.formulario.value.instituicao_cargo);
    this.Persistir<Cargo>(cargo);
  }
}
