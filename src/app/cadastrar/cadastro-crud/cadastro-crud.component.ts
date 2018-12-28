import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../base/base-crud.component';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cadastro-crud',
  templateUrl: './cadastro-crud.component.html',
  styleUrls: ['./cadastro-crud.component.scss'],
  animations: [routerTransition()]
})
export class CadastroCrudComponent<T> extends BaseCrudComponent<T> {
  possuiMatricula: boolean = false;
  senhasIguais: boolean = true;
  validacaoCustomizada: any;

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
    this.formulario.get('cadastro.confirmarSenha').valueChanges.subscribe(data => {
      if (this.formulario.get('cadastro.senha').value == null || this.formulario.get('cadastro.senha').value !== data) {
        this.senhasIguais = false;
      } else {
        this.senhasIguais = true;
      }
    });

    this.formulario.get('cadastro.matricula').valueChanges.subscribe(data => {
      if (String(data).length > 5)
        this.service.Get<T>(`${this.rota}/BuscarPorMatricula`, data).subscribe(
          () => this.possuiMatricula = true,
          error => this.possuiMatricula = false)
    });
  }

  validarEtapa() {
    if (this.formulario.get('cadastro.confirmarSenha').value == null || this.formulario.get('cadastro.senha').value == null || this.possuiMatricula)
      this.multiValidacao.eValido = false;
    else if (this.senhasIguais && this.formulario.controls[Object.keys(this.formulario.controls)[this.etapa]].valid && !this.possuiMatricula)
      this.multiValidacao.eValido = true;
    else this.multiValidacao.eValido = false;
  }

  Finalizar() { }
}
