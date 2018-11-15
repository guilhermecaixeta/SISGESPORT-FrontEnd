import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base.component';

@Component({ template: '' })
export class BaseEtapaComponent extends BaseComponent {
    @Input() formulario: FormGroup;
    @Input() acao: string;
    @Input() rota: string;

    @Input() objetoRetorno: any = null;
    @Input() multiValidacao: any = null;
    @Input() validacaoCustomizada = false;
    @Output() multiValidacaoEmit: EventEmitter<any> = new EventEmitter<any>(true);
}