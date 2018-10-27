import { TipoAlerta } from './../enum/sisgesport.enum';
import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';
import { BaseCrudComponent } from '../base';
import { Alerta } from '../model/alerta.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent extends BaseCrudComponent {

    usuario = {
        senha: '',
        matricula: ''
    };

    onLoggedin() {
        this.service.Login(this.usuario).subscribe(
            () => this.router.navigate(['/principal'], { relativeTo: this.activatedRoute }),
            err => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], err))
        );
    }
}
