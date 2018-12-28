import { BaseCrudComponent } from './../../../base/base-crud.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Curso } from '../../../model/curso.model';
import { routerTransition } from '../../../router.animations';
import { Instituicao } from '../../../model/instituicao.model';

@Component({
  selector: 'app-curso-crud',
  templateUrl: './curso-crud.component.html',
  animations: [routerTransition()]
})
export class CursoCrudComponent extends BaseCrudComponent<Curso> {
  listaInstituicao: Instituicao[] = [];
  value: boolean = false;
  rota = "curso";

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(255)]],
    instituicao: [null, [Validators.required]],
    flg_ativo: [null]
  });

  iniciar() {
    this.service.Get<Instituicao[]>('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object;
    });
  }
  aposIniciar() {
    this.formulario.get('instituicao').setValue(this.objetoRetorno.instituicao.id);
    this.formulario.get('flg_ativo').setValue(this.objetoRetorno.flg_ativo ? 1 : null);
  }

  Finalizar() {
    let curso = new Curso(this.formulario.value);
    this.Persistir<Curso>(curso);
  }
}
