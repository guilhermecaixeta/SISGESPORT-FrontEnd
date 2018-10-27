import { PerfilSistema } from './../../enum/sisgesport.enum';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, NavigationEnd, RoutesRecognized, ResolveStart } from '@angular/router';
import { Router } from '@angular/router';
import { ObservablePadrao } from '../../utils/observable.util.component';
import { filter, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private observablePadrao: ObservablePadrao, private activatedRoute: ActivatedRoute) { }
    canActivate() {
        if ((localStorage.getItem('token') !== 'undefined' || localStorage.getItem('token') !== undefined && null) && localStorage.getItem('token')) {
            this.observablePadrao.getValue.subscribe(x => {
                if (x) {
                    this.router.events.pipe(
                        filter(event => event instanceof ResolveStart),
                        map(event => {
                            let data = null;
                            let route = event['state'].root;
                            while (route) {
                                data = route.data || data;
                                route = route.firstChild;
                            }
                            return data;
                        }),
                    ).subscribe(data => {
                        if (data.perfil)
                            if (data instanceof Object && data.perfil == x.data.authorities[0].authority
                                || data == PerfilSistema.NO_ROLE) {
                                return true;
                            }
                            else {
                                this.router.navigate(['/principal']);
                                return false;
                            }
                    });
                }
            });
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
