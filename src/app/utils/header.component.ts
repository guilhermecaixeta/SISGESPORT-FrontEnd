import { HttpHeaders, HttpParams } from '@angular/common/http';

let httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    })
};
/**
 * Retorna o header a ser usado na requisição e caso o usuário possua token ele é adicionado na requisição.
 * @param filter parametro a ser adicionado no cabecalho
 */
export function getHeader(filter: any = null) {
    let params: HttpParams = new HttpParams();
    if (filter != null)
        Object.keys(filter).map(k => params = params.set(k, filter[k]));
    Object.assign(httpOptions, httpOptions, { params: params });
    if (localStorage.getItem('token') != null)
        httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return httpOptions;
}