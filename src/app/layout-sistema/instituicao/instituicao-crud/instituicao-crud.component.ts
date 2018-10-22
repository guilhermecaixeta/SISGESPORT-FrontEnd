import { Instituicao } from './../../../model/instituicao.model';
import { Validators } from '@angular/forms';
import { BaseCrudComponent } from './../../../base/base-crud.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { requiredMinLength } from '../../../utils/validators.util.component';

@Component({
  selector: 'app-instituicao-crud',
  templateUrl: './instituicao-crud.component.html',
  styleUrls: ['./instituicao-crud.component.scss'],
  animations: [routerTransition()]
})
export class InstituicaoCrudComponent extends BaseCrudComponent {
  rota = "instituicao";
  value: boolean = false;
  validacaoCustomizada = true;

  formulario = this.construtorFormulario.group({
    instituicao: this.construtorFormulario.group({
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
    console.log('2', this.objetoRetorno);
    this.formulario.controls.instituicao.patchValue(this.objetoRetorno);
  }
  finalizar() {
    let instituicao = new Instituicao(this.formulario.value.instituicao);
    instituicao.adicionarEndereco(Object.assign({},
      this.formulario.controls.endereco.value,
      { cep: this.LimparCaracterEspecial(this.formulario.controls.endereco.value.cep) }));
    this.Persistir<Instituicao>(instituicao);
  }
}

