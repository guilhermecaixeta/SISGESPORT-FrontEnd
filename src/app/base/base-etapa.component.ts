import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base.component';
/**
 * Componente base para os elementos de etapas, vide: insercao.component e visualizacao.component. 
 */
@Component({ template: '' })
export class BaseEtapaComponent<T> extends BaseComponent {
    /**
     * Formulario de entrada a ser usado no BaseEtapa
     */
    @Input() formulario: FormGroup;
    /**
     * Acao de entrada
     */
    @Input() acao: string;
    /**
     * Rota de entrada
     */
    @Input() rota: string;

    /**
     * Opcional, objeto carregado do back-end.
     */
    @Input() objetoRetorno: T = null;
    /**
     * Opcional, objeto usado para multivalidação das etapas.
     */
    @Input() multiValidacao: any = null;
    /**
     * Opcional, objeto usado para validar a multivalidação das etapas.
     */
    @Input() validacaoCustomizada = false;
    /**
     * Emite a nova multivalidação.
     */
    @Output() multiValidacaoEmit: EventEmitter<any> = new EventEmitter<any>(true);
}