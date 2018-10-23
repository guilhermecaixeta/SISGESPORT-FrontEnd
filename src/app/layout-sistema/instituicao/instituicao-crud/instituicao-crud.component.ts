import { Instituicao } from './../../../model/instituicao.model';
import { Validators } from '@angular/forms';
import { BaseCrudComponent } from './../../../base/base-crud.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { requiredMinLength } from '../../../utils/validators.util.component';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-instituicao-crud',
  templateUrl: './instituicao-crud.component.html',
  styleUrls: ['./instituicao-crud.component.scss'],
  animations: [routerTransition()]
})
export class InstituicaoCrudComponent extends BaseCrudComponent {
  rota = "instituicao";
  value: boolean = false;

  formulario = this.construtorFormulario.group({
    instituicao: this.construtorFormulario.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(255)]],
      descricao: [null, [Validators.required, Validators.maxLength(255)]]
    }),
    endereco: this.construtorFormulario.group({
      id: [null],
      estado: [null, [Validators.required]],
      municipio: [null, [Validators.required]],
      cep: [null, [Validators.required, requiredMinLength(8, true)]],
      complemento: [null, [Validators.required, Validators.maxLength(255)]],
      logradouro: [null, [Validators.required, Validators.maxLength(255)]],
      bairro: [null, [Validators.required, Validators.maxLength(255)]]
    })
  });

  aposIniciar() {
    this.formulario.controls.instituicao.patchValue(this.objetoRetorno);
    if (!isNullOrUndefined(this.objetoRetorno.endereco)) {
      this.formulario.controls.endereco.patchValue(this.objetoRetorno.endereco[0]);
      this.formulario.get('endereco.estado').setValue(this.objetoRetorno.endereco[0].municipio.estado.id);
      this.formulario.get('endereco.municipio').setValue(this.objetoRetorno.endereco[0].municipio.id);
    }

  }
  finalizar() {
    let instituicao = new Instituicao(this.formulario.value.instituicao);
    instituicao.adicionarEndereco(Object.assign({},
      this.formulario.controls.endereco.value,
      { cep: this.LimparCaracterEspecial(this.formulario.controls.endereco.value.cep) }));
    this.Persistir<Instituicao>(instituicao);
  }
}

