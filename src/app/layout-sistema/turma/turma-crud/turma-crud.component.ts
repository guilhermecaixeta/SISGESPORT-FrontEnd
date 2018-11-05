import { Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../../base';
import { routerTransition } from '../../../router.animations';
import { validateDateMoreThen, validateDateLessThen, } from '../../../utils/validators.util.component';
import { Turma } from '../../../model/turma.model';

@Component({
  selector: 'app-turma-crud',
  templateUrl: './turma-crud.component.html',
  styleUrls: ['./turma-crud.component.scss'],
  animations: [routerTransition()]
})
export class TurmaCrudComponent extends BaseCrudComponent {
  rota: string = 'turma';
  value: boolean = false;
  listaCurso: any[] = [];
  listaInstituicao: any[] = [];

  formulario = this.construtorFormulario.group({
    instituicao: [null, [Validators.required]],
    dataInicial: [null, [Validators.required, validateDateMoreThen()]],
    dataLimite: [null, [Validators.required]],
    flgAtivo: [null],
    curso: [null, [Validators.required]],
    nome: [null, [Validators.required, Validators.maxLength(50)]],
    id: [null]
  });

  iniciar() {
    this.formulario.get('dataLimite').setValidators(validateDateLessThen(this.formulario.get('dataInicial') as FormControl));
    this.formulario.get('dataInicial').valueChanges.subscribe(x => {
      if (x)
        this.formulario.get('dataLimite').setValue({ year: x.year + 4, month: x.month, day: x.day })
    });

    this.service.Get('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object.data;
    });

    this.formulario.get('instituicao').valueChanges.subscribe(idInstituicao => {
      this.service.Get('curso/BuscarCursoPorIdInstituicao', idInstituicao).subscribe(object => {
        this.listaCurso = object.data;
      });
    });
  }

  aposIniciar() {
    this.formulario.get('instituicao').setValue(this.objetoRetorno.curso.instituicao.id);
    this.formulario.get('curso').setValue(this.objetoRetorno.curso.id);
  }

  finalizar() {
    let turma = new Turma(this.formulario.value);
    this.Persistir<Turma>(turma);
  }
}
