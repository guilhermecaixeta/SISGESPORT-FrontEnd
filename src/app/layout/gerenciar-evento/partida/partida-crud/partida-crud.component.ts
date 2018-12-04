import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';
import { Validators } from '@angular/forms';
import { ValidateDateLessThen } from '../../../../utils/validators.util.component';
import { Partida } from '../../../../model/partida.model';

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
  editar: boolean = false;

  formulario = this.construtorFormulario.group({
    id: [],
    dataPartida: [null, [Validators.required, ValidateDateLessThen()]],
    duracaoPartida: [null, [Validators.required, Validators.min(1)]],
    acrescimo: [null],
    juiz: [null, [Validators.required]],
    timeCasa: [null, [Validators.required]],
    timeVisita: [null, [Validators.required]],
    evento: [null, [Validators.required]],
    modalidade: [null, [Validators.required]]
  });

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
    this.service.Get('modalidade/BuscarTodos').subscribe(object => this.listaModalidade = object.data);
    this.service.Get('servidor/BuscarTodos').subscribe(object => this.listaServidor = object.data);
    this.service.Get('evento/BuscarTodos').subscribe(object => this.listaEvento = object.data);

    this.formulario.get('evento').valueChanges.subscribe(() => this.exibirModalidade = true);
    
    this.formulario.get('modalidade').valueChanges.subscribe(data => {
      let idEvento = this.formulario.get('evento').value;
      if (this.carregarLista || this.acao == 'cadastrar') {
        this.service.Get('time/BuscarPorEventoIdEModalidadeId', `${idEvento}/${data}`).subscribe(lista => {
          this.exibirTimeCasa = true;
          this.listaTimeCasa = lista.data;
          this.listaTimeVisita = this.PreencherListaTimeVisita(this.listaTimeCasa);
        });
      }
    });

    this.formulario.get('timeCasa').valueChanges.subscribe(data => {
      if (this.carregarLista || this.acao == 'cadastrar') {
        if (this.acao == 'editar' && !this.editar)
          this.formulario.get('timeVisita').setValue(null);
        this.exibirTimeVisita = true;
        this.listaTimeVisita = this.PreencherListaTimeVisita(this.listaTimeCasa, data);
      }
    });
  }

  PreencherListaTimeVisita(listaEntrada: any[], id: number = 0): any[] {
    let listaSaida: any[] = [];
    listaEntrada.forEach(x => listaSaida.push(x));
    if (id > 0) {
      let index = listaEntrada.findIndex(x => x.id == id);
      listaSaida.splice(index, 1);
    }
    return listaSaida;
  }

  aposIniciar() {
    this.carregarLista = true;
    this.editar = true;
    this.formulario.get('evento').setValue(this.objetoRetorno.evento.id);
    this.formulario.get('modalidade').setValue(this.objetoRetorno.modalidade.id);
    this.formulario.get('timeVisita').setValue(this.objetoRetorno.timeVisita.id);
    this.formulario.get('timeCasa').setValue(this.objetoRetorno.timeCasa.id);
    this.formulario.get('juiz').setValue(this.objetoRetorno.juiz.id);
    this.editar = false;
  }

  Finalizar() {
    let partida = new Partida(this.formulario.value);
    this.Persistir<Partida>(partida);
  }
}