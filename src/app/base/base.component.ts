import { Alerta } from './../model/alerta.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Service } from '../service/service.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservablePadrao } from '../utils/observable.util.component';
import { isNullOrUndefined } from 'util';
import { TipoAlerta } from '../enum/sisgesport.enum';

/**
 * Componente base para a aplicaçao.
 */
@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit {

  constructor(
    public construtorFormulario: FormBuilder,
    public service: Service,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public observablePadrao: ObservablePadrao
  ) { }
  /**
   * Objeto Alerta, usado para emitir mensagem na tela
   */
  alerta: Alerta;
  /**
   * Emite a lista dos metodos AdicionarItem e DeletarItem
   */
  @Output() emiteLista: EventEmitter<any[]> = new EventEmitter<any[]>();
  /**
   * Objeto usado para realizar ações específicas em determinados métodos ou classes.
   */
  funcaoEspecifica = {
    executar: (lista: any[]): any[] => this.executar(lista),
    validar: (lista: any[]): boolean => this.validar(lista)
  }

  /**
   * Metodo que compõem o objeto funcaoEspecifica.
   * Deve ser implementado na classe filha.
   * @param lista lista de entrada
   */
  executar(lista: any[]): any[] {
    return lista;
  }
  /**
   * Metodo que compõem o objeto funcaoEspecifica.
   * Deve ser implementado na classe filha.
   * @param lista lista de entrada
   */
  validar(lista: any[]): boolean {
    return true;
  }

  dataMaxima: Date = new Date();
  dataMinima: Date = new Date(this.dataMaxima.getFullYear() - 65, this.dataMaxima.getMonth(), this.dataMaxima.getDate());
  /**
   * Array de alerta do sistema
   */
  public alertas: Alerta[] = [];
  /**
   * Rota a ser consumida pelo componente filho.
   */
  rota: string;
  /**
   * Ação a ser executada.
   */
  acao: any;

  validacaoData: RegExp = /(\d{2})\/(\d{2})\/(\d{4}).*(\d{2}\:\d{2})/;
  /**
   * Método a ser executado ao iniciar o componente. Deve ser implementado nas classes filhas.
   */
  public iniciar() { }
  /**
   * Método a ser executado após iniciar. Deve ser implementado nas classes filhas.
   * Em metodos que extendem o BASECRUD esse metodo só é executado após o objeto de edição ser carregado do back-end.
   */
  public aposIniciar() { }
  /**
   * Metodo que carrega os componentes iniciais, não sobrescrever em componentes onde serão realizados os cruds.
   */
  ngOnInit() {
    this.iniciar();
    this.aposIniciar();
  }
  /**
   * Método a ser implementado na etapa ou funcionalidade crud afim de realizar multipla validação da etapa.
   * @param opt Opcional
   */
  validarEtapa(opt?: any) { }
  /**
   * Verifica se uma variável é nula ou vazia.
   * @param value Variável a ser verificada
   */
  public IsNullOrEmpty(value: any): boolean {
    if (value === null || value === undefined || value === '') {
      return true;
    } else {
      return false;
    }
  }
  public ObterIdPorTamanhoLista(lista: any[]): number {
    if (lista.length > 0) {
      let tamanho = lista.length;
      return tamanho++;
    } else return 0;
  }
  /**
   * Verifica se uma string contêm determinado valor.
   * @param value String a ser verificada
   * @param comparer Valor a ser verificado se existe na string passada
   */
  public Contains(value: string, comparer: string): any {
    if (value.search(comparer) < 0) {
      return false;
    } else {
      return true;
    }
  }
  /**
   * Converte os campos do objeto onde o valor é igual á: dd/mm/aaaa para: {aaaa, mm, dd}
   * @param obj objeto a ser percorrido
   */
  public DateConvert(obj: any): any {
    Object.keys(obj).forEach(key => {
      obj[key] = this.validacaoData.test(obj[key]) ? {
        day: +String(obj[key]).substr(0, 2), month: +String(obj[key]).substr(3, 2),
        year: +String(obj[key]).substr(6, 4), hour: +String(obj[key]).substr(11, 2), minute: +String(obj[key]).substr(14, 2)
      } : obj[key];
    });
    return obj;
  }

  /**
   * Converte um objeto para o formato de string: dd/mm/aaaa  ou para uma data no tipo Date
   * @param obj objeto a ser convertido
   * @param date verifica para qual formato vai ser convertido
   */
  public ConvertObjectToDate(obj: any, date: boolean = false): any {
    if (!isNullOrUndefined(obj) && !date)
      return `${obj.day}/${obj.month}/${obj.year}`;
    else if (!isNullOrUndefined(obj) && date)
      return new Date(`${obj.year}-${obj.month}-${obj.day}`);
    else return '';
  }
  /**
   * Converte um objeto para o formato: hh:mm
   * @param obj objeto a ser convertido
   */
  public ConvertObjectToTime(obj: any) {
    if (!isNullOrUndefined(obj))
      return `${String(obj.hour).length > 1 ? obj.hour : '0' + obj.hour}:${String(obj.minute).length > 1 ? obj.minute : '0' + obj.minute}`;
    else return '';
  }
  /**
   * Seta todos os valores de um formulario percorrendo e marcado cada campo com o valor passado.
   * @param formGroup Formulário a ser tocado
   * @param func Tipo de função a ser usada no método, markAsDirty ou markAsPristine
   * @param opts Opcional
   */
  public TocarTodos(formGroup: FormGroup | FormArray, func = 'markAsDirty', opts = { onlySelf: false }): void {
    Object.keys(formGroup.controls).map((key, index) => {
      let obj = formGroup.controls[key];
      if (obj instanceof FormGroup || obj instanceof FormArray)
        this.TocarTodos(obj, func, opts);
      else
        obj[func](opts);
    });
  }

  /**
   * Limpa todos os caracteres especiais da variavel passada, retorna uma string que possui caracateres alfanuméricos.
   * @param campo Variável a ser limpa
   */
  public LimparCaracterEspecial(campo: string): string {
    if (campo != null)
      return campo.replace(/[^0-9A-Za-z]/g, '');
    else return '';
  }

  public fecharAlerta(alert: any) {
    const index: number = this.alertas.indexOf(alert);
    this.alertas.splice(index, 1);
  }

  /**
   * Retorna o primeiro elemento da lista a ter o valor comparado verdadeiro.
   * @param lista lista a ser percorrida
   * @param id identificador a ser comparado no objeto
   * @param nomeCampo nome do campo a ser comparado por padrão o nome é id
   */
  public ObterItemPorId(lista: any[], id: any, nomeCampo: string = 'id'): any {
    if (!isNullOrUndefined(lista) && !isNullOrUndefined(id))
      return lista.find(x => x[nomeCampo] == id);
    else return '';
  }

  /**
   * Adiciona um item a uma lista.
   * @param lista lista a ser adicionado o item.
   * @param objeto item a ser adicionado a lista.
   * @param msg mensagem a ser exibida caso erro. 
   */
  public AdicionarItem(lista: any[], objeto: any, resetarForm: boolean = true, msg: string = 'Esse item já foi adicionado!') {
    let form = objeto as FormGroup;
    this.alerta = new Alerta(this.ObterIdPorTamanhoLista(lista), TipoAlerta[4], msg);
    if (form.valid) {
      if (this.funcaoEspecifica.validar(lista)) {
        lista.push(form.value);
        lista = this.funcaoEspecifica.executar(lista);
      } else {
        this.alertas.push(this.alerta);
      }
      if (resetarForm) objeto.reset();
    } else {
      this.TocarTodos(form)
    }
    this.emiteLista.emit(lista);
  }

  /**
   * Deleta um item da lista.
   * @param lista lista a ter o item deletado.
   * @param index indice do item a ser deletado.
   * @param msg Mensagem a ser exibida caso erro.
   */
  public DeletarItem(lista: any[], index: number, msg: string = 'Erro ao excluir o item!') {
    if (lista.length > 0) {
      if (this.funcaoEspecifica.validar(lista))
        lista.splice(index, 1);
    } else {
      this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(lista), TipoAlerta[4], msg));
    }
    this.emiteLista.emit(lista);
  }
 }
