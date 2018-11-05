import { Component, OnInit } from '@angular/core';
import { BaseEtapaComponent } from '../base';
import { MaskField } from '../utils/mask.util.component';
import { TipoAlerta } from '../enum/sisgesport.enum';
import { Alerta } from '../model/alerta.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent extends BaseEtapaComponent {
  estadosLista: any[];
  municipioLista: any[];
  iniciando: boolean = true;
  iniciar() {
    this.iniciando = this.acao == 'cadastrar' ? false : true;
    this.service.Get('estado/BuscarTodos').subscribe(object => {
      this.estadosLista = object.data;
    });
    this.formulario.get('estado').valueChanges.subscribe(id => {
      this.service.Get('municipio/BuscarPorIdEstado', id).subscribe(object => this.municipioLista = object.data);
    });
    this.formulario.get('cep').valueChanges.subscribe(cep => {
      cep = this.LimparCaracterEspecial(cep);
      if (String(cep).length > 7 && this.acao !== 'visualizar' && !this.iniciando) {
        this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[2], 'Aguarde consultando cep...'));
        this.service.GetAdress(cep).subscribe(data => {
          this.formulario.get('bairro').setValue(data.bairro);
          this.formulario.get('logradouro').setValue(data.logradouro);
          this.formulario.get('estado').setValue(this.estadosLista.find(x => x.nome == data.estado_info.nome)['id']);
        },
          () => this.alertas.push(new Alerta(this.ObterIdPorTamanhoLista(this.alertas), TipoAlerta[4], 'Erro ao realizar consulta por CEP.')),
          () => this.alertas = []);
      }
    });
  }
}
