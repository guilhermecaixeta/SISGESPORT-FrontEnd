import { Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../base';
import { routerTransition } from '../../../router.animations';
import { ValidateDateMoreThen, ValidateDateLessThen } from '../../../utils/validators.util.component';
import { Turma } from '../../../model/turma.model';
import { Instituicao } from '../../../model/instituicao.model';
import { Curso } from '../../../model/curso.model';

@Component({
  selector: 'app-turma-crud',
  templateUrl: './turma-crud.component.html',
  animations: [routerTransition()]
})
export class TurmaCrudComponent extends BaseCrudComponent<Turma> {
  rota: string = 'turma';
  value: boolean = false;
  listaCurso: Curso[] = [];
  listaInstituicao: Instituicao[] = [];

  formulario = this.construtorFormulario.group({
    instituicao: [null, [Validators.required]],
    dataInicial: [null, [Validators.required, ValidateDateMoreThen()]],
    dataLimite: [null, [Validators.required]],
    flgAtivo: [null],
    curso: [null, [Validators.required]],
    nome: [null, [Validators.required, Validators.maxLength(50)]],
    id: [null]
  });

  iniciar() {
    this.formulario.get('dataLimite').setValidators(ValidateDateLessThen(this.formulario.get('dataInicial') as FormControl));
    this.formulario.get('dataInicial').valueChanges.subscribe(x => {
      if (x)
        this.formulario.get('dataLimite').setValue({ year: x.year + 4, month: x.month, day: x.day })
    });

    this.service.Get<Instituicao[]>('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object;
    });

    this.formulario.get('instituicao').valueChanges.subscribe(idInstituicao => {
      this.service.Get<Curso[]>('curso/BuscarCursoPorIdInstituicao', idInstituicao).subscribe(object => {
        this.listaCurso = object;
      });
    });
  }

  aposIniciar() {
    this.formulario.get('instituicao').setValue(this.objetoRetorno.curso.instituicao.id);
    this.formulario.get('flgAtivo').setValue(this.objetoRetorno.flgAtivo? 1 : null);
    this.formulario.get('curso').setValue(this.objetoRetorno.curso.id);
  }

  Finalizar() {
    let turma = new Turma(this.formulario.value);
    this.Persistir<Turma>(turma);
  }
}
