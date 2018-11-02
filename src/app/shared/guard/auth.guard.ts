import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Router } from '@angular/router';
import { ObservablePadrao } from '../../utils/observable.util.component';
import { PerfilSistema } from '../../enum/sisgesport.enum';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private observablePadrao: ObservablePadrao, private router: Router) {
    }
    autenticado: boolean;
    public Permissions(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        this.observablePadrao.getValue.subscribe(permissoes => {
            if (permissoes.data && route.data && !isNullOrUndefined(route.data.perfil)) {
                let perfil = route.data.perfil;
                console.log(route.data.perfil);
                if (permissoes.data.authorities[0].authority == perfil || perfil == PerfilSistema.NO_ROLE)
                    this.autenticado = true;
                else {
                    this.router.navigate(['/acesso-negado']);
                    this.autenticado = false;
                }
            } else {
                this.autenticado = true;
            }
            return this.autenticado;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('token')) {
            this.Permissions(route, state);
            return this.autenticado;
        } else {
            this.router.navigate(['/login']);
            return true;
        }
    }
    canActivateChild = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => this.canActivate(route, state);
}
