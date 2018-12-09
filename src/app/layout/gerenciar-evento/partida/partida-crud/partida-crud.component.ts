import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';
import { Validators } from '@angular/forms';
import { ValidateDateLessThen, ComparerBetweenDateII } from '../../../../utils/validators.util.component';
import { Partida } from '../../../../model/partida.model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-partida-crud',
  templateUrl: './partida-crud.component.html',
  styleUrls: ['./partida-crud.component.scss'],
  animations: [routerTransition()]
})
export class PartidaCrudComponent extends BaseCrudComponent {

  rota: string = 'partida';
  value: boolean = false;
  carregarLista: boolean = false;
  exibirTimeCasa: boolean = false;
  exibirTimeVisita: boolean = false;
  exibirModalidade: boolean = false;

  listaModalidade: any[] = [];
  listaTimeVisita: any[] = [];
  listaTimeCasa: any[] = [];
  listaServidor: any[] = [];
  listaEvento: any[] = [];
  listaTime: any[] = [];
  editar: boolean = false;

  formulario = this.construtorFormulario.group({
    id: [],
    acrescimo: [null],
    juiz: [null, [Validators.required]],
    evento: [null, [Validators.required]],
    timeCasa: [null, [Validators.required]],
    timeVisita: [null, [Validators.required]],
    modalidade: [null, [Validators.required]],
    dataPartidaHorario: [null, [Validators.required]],
    duracaoPartida: [null, [Validators.required, Validators.min(1)]],
    dataPartida: [null, [Validators.required, ValidateDateLessThen()]]
  });

  iniciar() {
    this.formulario.get('evento').valueChanges.subscribe(data => {
      let evento = this.ObterItemPorId(this.listaEvento, data);
      if (!this.IsNullOrEmpty(evento)) {
        if (!this.editar) this.listaModalidade = this.PreencherListaModalidade(evento.eventoModalidade);
        this.formulario.get('dataPartida')
          .setValidators(ComparerBetweenDateII(this.ConvertObjectToDate(this.DateConvert(evento).dataInicio, true),
            this.ConvertObjectToDate(this.DateConvert(evento).dataFim, true)));
      };
      this.exibirModalidade = true;
    });

    this.formulario.get('modalidade').valueChanges.subscribe(data => {
      let idEvento = this.formulario.get('evento').value;
      if (!this.editar)
        this.formulario.get('timeCasa').reset();
      this.listaTimeCasa = [];

      if ((this.carregarLista || this.acao == 'cadastrar') && this.listaModalidade.length > 0 && idEvento > 0) {
        let modalidade = this.ObterItemPorId(this.listaModalidade, data, 'idModalidadeEvento');
        this.service.Get('time/BuscarPorEventoIdEModalidadeId', `${idEvento}/${modalidade.id}`).subscribe(lista => {
          this.exibirTimeCasa = true;
          this.listaTime = lista.data;
          this.listaTime.forEach(x => {
            if (x.eventoModalidade.sexo == modalidade.sexo)
              this.listaTimeCasa.push(x)
          });
          this.listaTimeVisita = this.PreencherListaTimeVisita(this.listaTimeCasa, this.formulario.get('timeCasa').value);
        });
      }
    });

    this.formulario.get('timeCasa').valueChanges.subscribe(data => {
      if (this.carregarLista || this.acao == 'cadastrar') {
        if (!this.editar)
          this.formulario.get('timeVisita').reset();
        this.exibirTimeVisita = true;
        this.listaTimeVisita = this.PreencherListaTimeVisita(this.listaTimeCasa, data);
      }
    });

    this.service.Get('servidor/BuscarTodos').subscribe(object => this.listaServidor = object.data);
    this.service.Get('evento/BuscarTodos').subscribe(object => this.listaEvento = object.data);
  }

  PreencherListaTimeVisita(listaEntrada: any[], id: number = 0): any[] {
    let listaSaida: any[] = [];
    listaEntrada.forEach(x => {
      if (x.id != id)
        listaSaida.push(x);
    });
    return listaSaida;
  }

  PreencherListaModalidade(listaEntrada: any[]): any[] {
    let listaSaida: any[] = [];
    listaEntrada.forEach(x => {
      x.modalidade.nome = `${x.modalidade.nome} - ${x.sexo}`
      x.modalidade.sexo = x.sexo;
      x.modalidade.idModalidadeEvento = x.id;
      listaSaida.push(x.modalidade);
    });
    return listaSaida;
  }

  aposIniciar() {
    this.carregarLista = true;
    this.editar = true;
    this.listaModalidade = this.PreencherListaModalidade(this.objetoRetorno.evento.eventoModalidade);
    this.formulario.get('evento').setValue(this.objetoRetorno.evento.id)
    this.formulario.get('modalidade').setValue(this.objetoRetorno.eventoModalidade.id);

    this.formulario.get('dataPartidaHorario').setValue(this.objetoRetorno.dataPartida);
    this.formulario.get('timeVisita').setValue(this.objetoRetorno.timeVisita.id);
    this.formulario.get('timeCasa').setValue(this.objetoRetorno.timeCasa.id);
    this.formulario.get('juiz').setValue(this.objetoRetorno.juiz.id);
    this.editar = false;
  }

  Finalizar() {
    let partida = new Partida(Object.assign({}, this.formulario.value,
      {
        modalidade: this.ObterItemPorId(this.listaModalidade,
          this.formulario.get('modalidade').value, 'idModalidadeEvento').idModalidadeEvento
      }));
    this.Persistir<Partida>(partida);
  }
}