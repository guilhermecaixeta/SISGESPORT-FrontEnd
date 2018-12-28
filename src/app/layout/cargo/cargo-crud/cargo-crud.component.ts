import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../base';
import { routerTransition } from '../../../router.animations';
import { Cargo } from './../../../model/cargo.model';
import { Instituicao } from '../../../model/instituicao.model';

@Component({
  selector: 'app-cargo-crud',
  templateUrl: './cargo-crud.component.html',
  animations: [routerTransition()]
})
export class CargoCrudComponent extends BaseCrudComponent<Cargo> {
  rota = 'cargo';
  value: boolean = false;
  listaInstituicao: Instituicao[];
  
  formulario = this.construtorFormulario.group({
    id:[null],
    nome: [null, [Validators.required, Validators.maxLength(50)]],
    descricao: [null, [Validators.required, Validators.maxLength(255)]],
    instituicao_cargo: [null, [Validators.required]]
  })

  iniciar() {
    this.service.Get<Instituicao[]>('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object;
    });
  }

  aposIniciar() {
    let listaIdInstituicao: number[] = [];
    this.objetoRetorno.instituicao.forEach(element => {
      listaIdInstituicao.push(element.id);
    });
    this.formulario.get('instituicao_cargo').setValue(listaIdInstituicao);
  }

  Finalizar(){
    let cargo = new Cargo(this.formulario.value);
    cargo.adicionarInstituicao(this.formulario.value.instituicao_cargo);
    this.Persistir<Cargo>(cargo);
  }
}
