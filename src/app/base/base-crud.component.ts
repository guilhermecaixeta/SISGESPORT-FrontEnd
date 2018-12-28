import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base.component';
import { Alerta } from '../model/alerta.model';
import { TipoAlerta } from '../enum/sisgesport.enum';
import { isNullOrUndefined } from 'util';

/**
 * Componente base para realização do CRUD.
 */
@Component({
    template: ''
})
export class BaseCrudComponent<T> extends BaseComponent {
    id: any;
    /**
     * Formulário padrão para a persistencia de dados da aplicação.
     */
    formulario: FormGroup;
    /**
     * Objeto de retorno do back end.
     */
    objetoRetorno: T;
    /**
     * Variavel usada para identificar a etapa na qual o usuário se encontra em um crud que é necessário mais de uma etapa.
     */
    etapa = 0;
    /**
     * Número total de etapas do crud a ser preenchido pelo usuário. Esse valor deve ser alterado conforme a necessidade do crud.
     */
    etapasTotal = 2;

    value: boolean = true;
    /**
     * Variavel usada para indicar se a validacao é customizada.
     */
    validacaoCustomizada: boolean;
    /**
     * Objeto usado para realizar a multipla validação de dados em uma etapa. Deve ser implementado na classe filha.
     */
    multiValidacao =
        {
            formulario: this.formulario,
            eValido: false,
            validarEtapa: (opt?: any) => this.validarEtapa(opt)
        };

    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            this.id = param['id'];
            this.acao = (!isNullOrUndefined(param['acao']) ? param['acao'] : "cadastrar").toLowerCase();
        });
        this.iniciar();
        switch (this.acao) {
            case 'visualizar':
                this.etapa = (this.etapasTotal - 1);
                this.carregarDados<T>();
                this.formulario.disable();
                break;
            case 'editar':
                this.carregarDados<T>();
                break;
        }
    }

    /**
     * Carrega os dados usados para editar um dado.
     */
    carregarDados<T>() {
        this.service.Get<T>(`${this.rota}/BuscarPorId`, this.id).subscribe(obj => {
            this.objetoRetorno = this.DateConvert(obj['data'] ? obj['data'] : obj);
            this.formulario.patchValue(this.objetoRetorno);
            this.aposIniciar();
        });
    }
    /**
     * Metodo de persistencia do sistema. A variaval ação diz qual deve ser a ação realizada pelo método.
     * @param obj Objeto a ser persisitido
     */
    Persistir<T>(obj: any, rota?: string, acao?: string) {
        this.acao = !isNullOrUndefined(acao) ? acao : this.acao;
        this.acao == 'cadastrar' ?
            this.service.Post<T>(!isNullOrUndefined(rota) ? rota : this.rota, obj).subscribe(
                () => this.router.navigate(['../'], { relativeTo: this.activatedRoute }),
                err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err))
            ) : this.service.Put<T>(!isNullOrUndefined(rota) ? rota : this.rota, obj.id, obj).subscribe(
                () => this.router.navigate(['../../'], { relativeTo: this.activatedRoute }),
                err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err))
            );
    }
    /**
     * Método utilizado para realizar o preenchimento do objeto.
     * Invoca o método Persistir para realizar a persistencia do objeto no banco.
     * Deve ser implementado nas classes filhas.
     */
    Finalizar() { }
}
