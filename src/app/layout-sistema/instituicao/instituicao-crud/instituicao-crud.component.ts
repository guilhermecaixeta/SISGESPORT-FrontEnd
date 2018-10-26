import { Alerta } from './../../../model/alerta.model';
import { Instituicao } from './../../../model/instituicao.model';
import { Validators } from '@angular/forms';
import { BaseCrudComponent } from './../../../base/base-crud.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { requiredMinLength } from '../../../utils/validators.util.component';
import { isNullOrUndefined } from 'util';
import { TipoAlerta } from '../../../enum/sisgesport.enum';

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
  iniciando: boolean = true;
  validacaoCustomizada: boolean = true;

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

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
    if (this.acao == 'cadastrar') this.iniciando = false;
    this.service.Get('estado/BuscarTodos').subscribe(object => {
      this.estadosLista = object.data;
    });
    this.formulario.get('endereco.estado').valueChanges.subscribe(id => {
      if (!isNullOrUndefined(id))
        this.service.Get('municipio/BuscarPorIdEstado', id).subscribe(object => this.municipioLista = object.data);
    });

    this.formulario.get('endereco.cep').valueChanges.subscribe(cep => {
      cep = this.LimparCaracterEspecial(cep);
      if (String(cep).length > 7 && this.acao !== 'visualizar' && !this.iniciando) {
        this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[2], 'Aguarde consultando cep...'));
        this.service.GetAdress(cep).subscribe(data => {
          this.formulario.get('endereco.bairro').setValue(data.bairro);
          this.formulario.get('endereco.logradouro').setValue(data.logradouro);
          this.formulario.get('endereco.estado').setValue(this.estadosLista.find(x => x.nome == data.estado_info.nome)['id']);
        },
          () => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], 'Erro ao realizar consulta por CEP.')),
          () => this.alertas = []);
      }
    });
  }

  aposIniciar() {
    this.formulario.controls.instituicao.patchValue(this.objetoRetorno);
    if (!isNullOrUndefined(this.objetoRetorno.endereco) && this.objetoRetorno.endereco.length > 0) {
      this.formulario.controls.endereco.patchValue(this.objetoRetorno.endereco[0]);
      if (!isNullOrUndefined(this.objetoRetorno.endereco[0].municipio.estado)) {
        this.formulario.get('endereco.estado').setValue(this.objetoRetorno.endereco[0].municipio.estado.id);
        this.formulario.get('endereco.municipio').setValue(this.objetoRetorno.endereco[0].municipio.id);
      }
    }
    this.iniciando = false;
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

