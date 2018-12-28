import { usuario } from './../model/iusuario.model';
import { Validators } from '@angular/forms';
import { TipoAlerta } from './../enum/sisgesport.enum';
import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Alerta } from '../model/alerta.model';
import { BaseCrudComponent } from '../base';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent extends BaseCrudComponent<usuario> {

    formulario = this.construtorFormulario.group({
        matricula: [null, [Validators.required]],
        senha: [null, [Validators.required]]
    });
    iniciar() {
    }
    onLoggedin() {
        if (this.formulario.valid) {
            this.service.Login(this.formulario.value).subscribe(
                () => this.router.navigate(['/principal'], { relativeTo: this.activatedRoute }),
                err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err))
            );
        }
        else {
            this.TocarTodos(this.formulario);
            this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], 'Os campos não estão preenchidos corretamente.'));
        }
    }
}
