import { Municipio } from './../../model/municipio.model';
import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../base';
import { Alerta } from '../../model/alerta.model';
import { TipoAlerta } from '../../enum/sisgesport.enum';
import { Endereco } from '../../model/endereco.model';

@Component({
  selector: 'app-layout-endereco',
  templateUrl: './layout-endereco.component.html'
})
export class LayoutEnderecoComponent extends BaseEtapaComponent<Endereco> {
  @Input() estadosLista: any[];
  @Input() municipioLista: Municipio[];
  @Input() iniciando: boolean = true;
  iniciar() {
    if (this.acao == 'cadastrar') this.iniciando = false;

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

