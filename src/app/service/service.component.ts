import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { getHeader } from '../utils/header.component';
import { environment } from '../../environments/environment';
import { usuario } from '../model/iusuario.model';
import { ObservablePadrao } from '../utils/observable.util.component';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class Service {

    constructor(
        private http: HttpClient,
        private observablePadrao: ObservablePadrao,
        private router: Router,
        private activatedRoute: ActivatedRoute) { }
    /**
    * Obtem os dados a partir da rota passada
    * @param route rota a ser consumida
    * @param value valor do parametro de busca
     * @param param valor a ser adicionado no parametro do cabecalho
     */
    Get(route: string, value?: any, param?: any, reponseType: string = 'json'): Observable<any> {
        return this.http.get(`${environment.apiEndPoint}${route}${value !== undefined ? '/' + value : ''}`, getHeader(param, reponseType))
            .pipe(
                retry(3),
                map(response => response),
                catchError(err => this.handleError(err)));
    }
    /**
     * Serviço para consultar endereço por cep.
     * @param cep cep a ser consultado
     */
    GetAdress(cep: any): Observable<any> {
        return this.http.get(`https://api.postmon.com.br/v1/cep/${cep}`)
            .pipe(
                retry(3),
                map(response => response),
                catchError(err => this.handleError(err)));
    }

    /**
     * Envia um objeto para persistencia.
     * @param route rota a ser consumida
     * @param obj objeto a ser persistido
     */
    Post<T>(route: string, obj: T) {
        return this.http.post<T>(`${environment.apiEndPoint}${route}`, obj, getHeader())
            .pipe(catchError(err => this.handleError(err)));
    }

    /**
     * Envia um objeto para atualização.
     * @param route rota a ser consumida
     * @param obj objeto a ser atualizado
     */
    Put<T>(route: string, id: any, obj: T) {
        return this.http.put<T>(`${environment.apiEndPoint}${route}/${id}`, obj, getHeader()).pipe(catchError(err => this.handleError(err)));
    }

    /**
     * Deleta um objeto a partir do valor passado na requisição.
     * @param route rota a ser consumida
     * @param value valor do parametro da rota
     */
    Delete(route: string, value: any) {
        return this.http.delete(`${environment.apiEndPoint}/${route}/${value}`, getHeader()).pipe(catchError(err => this.handleError(err)));
    }

    //#region Login
    /**
     * Realiza o login do usuario
     * @param user objeto a ser persistido
     */
    Login(user: usuario) {
        return this.http.post<any>(`${environment.apiEndPointLogin}`, user, getHeader())
            .pipe(
                map(response => {
                    this.observablePadrao.setValue(response.data);
                    localStorage.setItem('token', response.data.token);
                }),
                catchError(err => this.handleError(err)));
    }

    ObterUsuario() {
        return this.http.get(`${environment.apiEndPointLogin}/ObterUsuarioLogado`, getHeader())
            .pipe(
                retry(3),
                map(response => {
                    this.observablePadrao.setValue({
                        id: response['data'].id, 
                        name: response['data'].name,
                        authorities: response['data'].authorities
                    })
                }),
                catchError(err => this.handleError(err)));
    }

    Logout() {
        localStorage.removeItem('token');
    }
    //#endregion


    private handleError(error: HttpErrorResponse) {
        console.log('erro:', error);
        if (error.status == 401) {
            localStorage.removeItem('token');
            this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
        } else
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                for (let index = 0; index < error['errors'].length; index++) {
                    console.error('Um erro aconteceu :', error.error instanceof Array ? console.log(error.error) : error.error);
                }
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(
                    `Backend retornou o código ${error.status}, ` +
                    `O erro é: ${error.error['errors'] instanceof Array ? error.error['errors'][error.error['errors'].length - 1] : error.error.message}`);
            }
        // return an observable with a user-facing error message
        return throwError(
            `Algo ruim aconteceu. Por favor entre em contato com o suporte técnico.`);
    };
}