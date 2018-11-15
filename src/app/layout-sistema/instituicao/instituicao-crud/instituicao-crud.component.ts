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
  estadosLista: any[];
  municipioLista: any[];
  value: boolean = false;
  validacaoCustomizada: boolean = true;
  iniciando: boolean = false;
  municipioDefault = {
    id: 0,
    nome: 'Selecione...'
  }
  formulario = this.construtorFormulario.group({
    instituicao: this.construtorFormulario.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(255)]],
      descricao: [null, [Validators.required, Validators.maxLength(255)]]
    }),
    endereco: this.construtorFormulario.group({
      estado: [null, [Validators.required]],
      municipio: [null, [Validators.required]],
      cep: [null, [Validators.required, requiredMinLength(8, true)]],
      complemento: [null, [Validators.required, Validators.maxLength(255)]],
      logradouro: [null, [Validators.required, Validators.maxLength(255)]],
      bairro: [null, [Validators.required, Validators.maxLength(255)]]
    })
  });

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
    this.service.Get('estado/BuscarTodos').subscribe(object => {
      this.estadosLista = object.data;
    });
    this.formulario.get('endereco.estado').valueChanges.subscribe(id => {
      if (!isNullOrUndefined(id))
        this.service.Get('municipio/BuscarPorIdEstado', id).subscribe(object => {
          this.municipioLista = object.data;
          this.municipioLista.push(this.municipioDefault);
          if (!this.iniciando) this.formulario.get('endereco.municipio').setValue(0);
          else this.iniciando = false;
        });
    });
  }

  aposIniciar() {
    this.iniciando = true;
    this.formulario.controls.instituicao.patchValue(this.objetoRetorno);
    if (!isNullOrUndefined(this.objetoRetorno.endereco) && this.objetoRetorno.endereco.length > 0) {
      this.formulario.controls.endereco.patchValue(this.objetoRetorno.endereco[0]);
      if (!isNullOrUndefined(this.objetoRetorno.endereco[0].municipio.estado)) {
        this.formulario.get('endereco.estado').setValue(this.objetoRetorno.endereco[0].municipio.estado.id);
        this.formulario.get('endereco.municipio').setValue(this.objetoRetorno.endereco[0].municipio.id);
      }
    }
  }

  validarEtapa() {
    if (this.formulario.controls.instituicao.valid && this.formulario.controls.endereco.valid)
      this.multiValidacao.eValido = true;
    else this.multiValidacao.eValido = false;
  }

  finalizar() {
    let instituicao = new Instituicao(this.formulario.value.instituicao);
    instituicao.adicionarEndereco(Object.assign({},
      this.formulario.controls.endereco.value,
      { cep: this.LimparCaracterEspecial(this.formulario.controls.endereco.value.cep) }));
    this.Persistir<Instituicao>(instituicao);
  }
}

