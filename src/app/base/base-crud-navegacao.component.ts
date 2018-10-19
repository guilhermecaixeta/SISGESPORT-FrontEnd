import { BaseComponent } from './base.component';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'base-crud-navegacao',
    template: `
    <div class="ui-g ui-md ui-lg"  *ngIf="UseStyleHome">
        <div class="ui-g-5 ui-md-2 ui-lg-2">
            <p>
                <a class="btn rounded-btn" (click)="paginacao($event,false)"> Voltar </a>
            </p>
        </div>
        
        <div class="ui-g-5 ui-md-2 ui-lg-2" *ngIf="acao != 'visualizar' && validarAcaoButao">
            <a class="btn rounded-btn" *ngIf="(etapa + 1) < etapasTotal" (click)="paginacao($event,true)"> Avançar </a>
            <a class="btn rounded-btn" *ngIf="(etapa + 1) == etapasTotal" (click)="paginacao($event)"> Finalizar </a>
        </div>
    </div>
    
    
    <div class="ui-g ui-md ui-lg"  *ngIf="!UseStyleHome">
            <button type="button" class="btn btn-secondary" (click)="paginacao($event,false)"> Voltar </button>
            <button type="button" class="btn btn-info" style="float:right" *ngIf="(etapa + 1) < etapasTotal" (click)="paginacao($event,true)"> Avançar </button>
            <button type="submit" class="btn btn-primary" style="float:right" *ngIf="(etapa + 1) == etapasTotal" (click)="paginacao($event)"> Finalizar </button>
    </div>
    `,
    styleUrls: ['./base.style.scss']
})
export class BaseCrudNavegacaoComponent extends BaseComponent {
    @Input() acao: String;
    @Input() validarAcaoButao = true;
    @Input() etapa: number;
    @Input() UseStyleHome: boolean = true
    @Output() etapaChange = new EventEmitter<number>();

    @Input() etapasTotal: number;
    @Input() formulario: FormGroup;
    @Output() finalizar: EventEmitter<any> = new EventEmitter();
    
    /**
     * Váriavel usada para validar se será usado uma validação customizada
     */
    @Input() validacaoCustomizada: any = false;
    
    /**
     * Variavel usada para indicar se é válido avançar para a próxima etapa caso a validacaoCustomizada seja verdadeira.
     */
    @Input() eValido: boolean = false;

    /**
     * Variavel usada para uma ou multiplas validações em um formulário, deve seguir um padrão para poder ser usada nesse componente.
     * E pode ser customizada de acordo com a necessidade do desenvolvedor. 
     */
    @Input() multiValidacao: any = null;

    /**
     * Variavel usada para validar se o formulario é válido caso o validacaoCustomizada seja falso
     */
    formularioValido: boolean;
    paginacao(event: any, acao: boolean = true) {
        const etapaAtual = this.etapa + 1;

        if (this.formulario != undefined && this.formulario.controls[Object.keys(this.formulario.controls)[this.etapa]] instanceof FormGroup)
            this.formularioValido = this.formulario.controls[Object.keys(this.formulario.controls)[this.etapa]].valid;
        else this.formularioValido = this.formulario.valid;

        if (acao && etapaAtual === this.etapasTotal) {
            this.finalizar.emit(event);
        } else if (acao && etapaAtual < this.etapasTotal) {
            this.multiValidacao = this.multiValidacao == null ? {
                formulario: this.formulario,
                eValido: false,
                validarEtapa: () => this.ValidacaoComum()
            } : this.multiValidacao;
            this.multiValidacao.validarEtapa();
            if (this.multiValidacao.eValido) {
                this.etapa++;
            } else {
                if (this.multiValidacao.formulario instanceof Array) {
                    this.multiValidacao.formulario.forEach(x => this.TocarTodos(x));
                } else {
                    this.TocarTodos(this.multiValidacao.formulario);
                }
            }
        } else if (!acao && etapaAtual > 1) {
            if (this.acao !== 'visualizar') {
                this.etapa--;
                this.TocarTodos(this.formulario, 'markAsPristine');
            } else {
                this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
            }
        } else if (!acao && etapaAtual === 1) {
            this.router.navigate([this.acao === "cadastrar" || this.acao == "formulario" ? '../' : '../../'],
                { relativeTo: this.activatedRoute });
        }
        this.etapaChange.emit(this.etapa);
    }

    ValidacaoComum() {
        this.multiValidacao.isValid = this.validacaoCustomizada ? this.eValido : this.formularioValido;
    }
}