import { BaseCrudComponent } from './../../../base/base-crud.component';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Curso } from '../../../model/curso.model';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-curso-crud',
  templateUrl: './curso-crud.component.html',
  styleUrls: ['./curso-crud.component.scss'],
  animations: [routerTransition()]
})
export class CursoCrudComponent extends BaseCrudComponent {
  listaInstituicao: any[] = [];
  value: boolean = false;
  rota = "curso";

  formulario = this.construtorFormulario.group({
    id: [null],
    nome: [null, [Validators.required, Validators.maxLength(255)]],
    instituicao: [null, [Validators.required]],
    flg_ativo: [null]
  });

  iniciar() {
    this.service.Get('instituicao/BuscarTodos').subscribe(object => {
      this.listaInstituicao = object.data;
    });
  }
  aposIniciar() {
    this.formulario.get('instituicao').setValue(this.objetoRetorno.instituicao.id);
    this.formulario.get('flg_ativo').setValue(this.objetoRetorno.flg_ativo ? 1 : null);
  }

  finalizar() {
    let curso = new Curso(this.formulario.value);
    this.Persistir<Curso>(curso);
  }
}
