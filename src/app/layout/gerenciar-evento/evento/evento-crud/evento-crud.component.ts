import { Evento } from './../../../../model/evento.model';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { requiredMinLength, validateDateLessThen, validateDateMoreThen, ComparerBetweenDate } from '../../../../utils/validators.util.component';
import { routerTransition } from '../../../../router.animations';
import { isNullOrUndefined } from 'util';
import { Alerta } from '../../../../model/alerta.model';
import { TipoAlerta } from '../../../../enum/sisgesport.enum';

@Component({
  selector: 'app-evento-crud',
  templateUrl: './evento-crud.component.html',
  styleUrls: ['./evento-crud.component.scss'],
  animations: [routerTransition()]
})
export class EventoCrudComponent extends BaseCrudComponent {
  rota: string = 'evento';

  value: boolean = false;
  iniciando: boolean = true;
  validacaoCustomizada = true;

  estadosLista: any[];
  municipioLista: any[];
  listaModalidade: any[] = [];
  listaEventoModalidade: any[] = [];

  dataAtual: Date = new Date();
  dataComparacao = new Date(`${this.dataAtual.getFullYear()}-${this.dataAtual.getMonth()}-${this.dataAtual.getDay() - 1}`);

  formulario = this.construtorFormulario.group({
    evento: this.construtorFormulario.group({
      nome: [null, [Validators.required, Validators.maxLength(255)]],
      descricao: [null, [Validators.required, Validators.maxLength(400)]],
      dataInicioInscricao: [null, [Validators.required, validateDateLessThen()]],
      dataFimInscricao: [null, [Validators.required]],
      dataInicio: [null, [Validators.required, validateDateLessThen()]],
      dataFim: [null, [Validators.required]],
      horaInicioInscricao: [null, [Validators.required, validateDateLessThen()]],
      horaFimInscricao: [null, [Validators.required]],
      horaInicio: [null, [Validators.required, validateDateLessThen()]],
      horaFim: [null, [Validators.required]],
      qntEquipes: [null, [Validators.required, Validators.min(2)]],
      codigoEvento: [null, { readonly: true }],
      dataCriacao: [null, { readonly: true }],
      criador: [null, { readonly: true }],
      idCriador: [null, { readonly: true }],
      id: [null],
    }),
    eventoModalidade: this.construtorFormulario.group({
      idadeMaximaPermitida: [null, [Validators.required]],
      modalidade: [null, [Validators.required]],
      sexo: [null, [Validators.required]]
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

  validarEtapa() {
    if (this.formulario.controls.evento.valid && this.formulario.controls.endereco.valid && this.listaEventoModalidade.length > 0) {
      this.multiValidacao.eValido = true;
    } else {
      let formValidacao: FormGroup = this.construtorFormulario.group({});
      if (!this.formulario.controls.evento.valid) formValidacao.addControl('evento', this.formulario.controls.evento);
      if (!this.formulario.controls.endereco.valid) formValidacao.addControl('endereco', this.formulario.controls.endereco);
      if (this.listaEventoModalidade.length == 0) {
        formValidacao.addControl('eventoModalidade', this.formulario.controls.eventoModalidade);
        this.alertas.push(new Alerta(0, TipoAlerta[3], 'É necessário adicionar ao menos um item na lista.'));
      } this.multiValidacao.eValido = false;
      this.TocarTodos(formValidacao);
    }
  }

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
    this.formulario.get('evento.dataInicioInscricao').setValidators(validateDateMoreThen(this.formulario.get('evento.dataInicio') as FormControl));
    this.formulario.get('evento.dataFimInscricao').setValidators(ComparerBetweenDate(this.formulario.get('evento.dataInicio') as FormControl,
      this.formulario.get('evento.dataInicioInscricao') as FormControl));
    this.formulario.get('evento.dataFim').setValidators(validateDateLessThen(this.formulario.get('evento.dataInicio') as FormControl));

    this.service.Get('estado/BuscarTodos').subscribe(object => {
      this.estadosLista = object.data;
    });
    this.formulario.get('endereco.estado').valueChanges.subscribe(id => {
      if (!isNullOrUndefined(id))
        this.service.Get('municipio/BuscarPorIdEstado', id).subscribe(object => this.municipioLista = object.data);
    });

    this.service.Get('modalidade/BuscarTodos').subscribe(object => {
      this.listaModalidade = object.data;
    });
  }

  aposIniciar() {
    this.formulario.get('evento.qntEquipes').disable();

    this.formulario.get('evento').patchValue(this.objetoRetorno);
    this.formulario.get('evento.criador').setValue(this.objetoRetorno.criador.nome);
    this.formulario.get('evento.idCriador').setValue(this.objetoRetorno.criador.id);

    this.formulario.get('evento.horaFim').setValue(this.objetoRetorno.dataFim);
    this.formulario.get('evento.horaInicio').setValue(this.objetoRetorno.dataInicio);

    this.formulario.get('evento.horaFimInscricao').setValue(this.objetoRetorno.dataFimInscricao);
    this.formulario.get('evento.horaInicioInscricao').setValue(this.objetoRetorno.dataInicioInscricao);

    this.formulario.get('evento.dataCriacao').setValue(this.ConvertObjectToDate(this.objetoRetorno.dataCriacao));

    if (!isNullOrUndefined(this.objetoRetorno.endereco) && this.objetoRetorno.endereco.length > 0) {
      this.formulario.controls.endereco.patchValue(this.objetoRetorno.endereco[0]);
      if (!isNullOrUndefined(this.objetoRetorno.endereco[0].municipio.estado)) {
        this.formulario.get('endereco.estado').setValue(this.objetoRetorno.endereco[0].municipio.estado.id);
        this.formulario.get('endereco.municipio').setValue(this.objetoRetorno.endereco[0].municipio.id);
      }
    }
    this.iniciando = false;
    this.objetoRetorno.eventoModalidade.forEach(element => {
      element.modalidadeNome = element.modalidade.nome;
      element.sexoNome = element.sexo == 'F' ? 'Feminino' : 'Masculino';
      element.modalidade = element.modalidade.id;
      this.listaEventoModalidade.push(element);
    });;
  }

  finalizar() {
    let evento = new Evento(this.formulario.get('evento').value);
    evento.adicionarEndereco(this.formulario.get('endereco').value);
    evento.AdicionarListaEventoModalidade(this.listaEventoModalidade);
    this.Persistir<Evento>(evento);
  }
}