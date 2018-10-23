import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from './base.component';
import { Alerta } from '../model/alerta.model';
import { TipoAlerta } from '../enum/sisgesport.enum';

@Component({
    selector: 'app-base-crud',
    template: ''
})
export class BaseCrudComponent extends BaseComponent {
    id: any;
    /**
     * Formulário padrão para a persistencia de dados da aplicação.
     */
    formulario: FormGroup;
    /**
     * Objeto de retorno do back end.
     */
    objetoRetorno: any;
    /**
     * Variavel usada para identificar a etapa na qual o usuário se encontra em um crud que é necessário mais de uma etapa.
     */
    etapa = 0;
    /**
     * Número total de etapas do crud a ser preenchido pelo usuário. Esse valor deve ser alterado conforme a necessidade do crud.
     */
    etapasTotal = 2;

    /**
     * Variavel usada para indicar se a validacao é customizada.
     */
    validacaoCustomizada: boolean;

    validacaoData: RegExp = /(((\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2}))([+-](\d{2})\:(\d{2}))?Z?z?)/;
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
            let linkLista = location.href.split('/');
            this.acao = (param['acao'] !== undefined ? param['acao'] : "cadastrar").toLowerCase();
        });

        this.iniciar();

        switch (this.acao) {
            case 'visualizar':
                this.etapa = (this.etapasTotal - 1);
                this.formulario.disable();
            case 'editar':
                this.carregarDados();
                break;
        }
    }

    /**
     * Carrega os dados usados para editar um dado.
     */
    carregarDados() {
        this.service.Get(`${this.rota}/BuscarPorId`, this.id).subscribe(obj => {
            Object.keys(obj).forEach(key => {
                obj[key] = this.validacaoData.test(obj[key]) ? new Date(obj[key]) : obj[key];
            });
            this.objetoRetorno = obj.data;
            this.formulario.patchValue(this.objetoRetorno);
            this.aposIniciar();
        });
    }
    /**
     * Metodo de persistencia do sistema. A variaval ação diz qual deve ser a ação realizada pelo método.
     * @param obj Objeto a ser persisitido
     */
    Persistir<T>(obj: any) {
        this.acao == 'cadastrar' ?
            this.service.Post<T>(this.rota, obj).subscribe(
                () => this.router.navigate(['../'], { relativeTo: this.activatedRoute }),
                err => this.alertas.push(new Alerta(this.alertas.length + 1, TipoAlerta[4], err))
            ) : this.service.Put<T>(this.rota, obj.id, obj).subscribe(
                () => this.router.navigate(['../../'], { relativeTo: this.activatedRoute }),
                err => this.alertas.push(new Alerta(this.alertas.length + 1, TipoAlerta[4], err))
            );
    }
}
