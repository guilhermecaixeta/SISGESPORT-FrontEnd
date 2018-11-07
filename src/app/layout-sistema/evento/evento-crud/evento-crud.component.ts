import { Evento } from './../../../model/evento.model';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../base';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { requiredMinLength, validateDateLessThen, validateDateMoreThen, ComparerBetweenDate } from '../../../utils/validators.util.component';
import { routerTransition } from '../../../router.animations';
import { isNullOrUndefined } from 'util';
import { Alerta } from '../../../model/alerta.model';
import { TipoAlerta } from '../../../enum/sisgesport.enum';

@Component({
  selector: 'app-evento-crud',
  templateUrl: './evento-crud.component.html',
  styleUrls: ['./evento-crud.component.scss'],
  animations: [routerTransition()]
})
export class EventoCrudComponent extends BaseCrudComponent {
  rota: string = 'evento';
  value: boolean = false;
  estadosLista: any[];
  municipioLista: any[];
  listaModalidade: any[] = [];
  listaEventoModalidade: any[] = [];
  validacaoCustomizada = true;
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
      qntEquipes: [null, [Validators.required]],
      codigoEvento: [null, { readonly: true }],
      dataCriacao: [null, { readonly: true }],
      criador: [null, { readonly: true }],
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

  aposIniciar() { }

  finalizar() {
    let evento = new Evento(this.formulario.get('evento').value);
    evento.adicionarEndereco(this.formulario.get('endereco').value);
    evento.AdicionarListaEventoModalidade(this.listaEventoModalidade);
    this.Persistir<Evento>(evento);
  }
}