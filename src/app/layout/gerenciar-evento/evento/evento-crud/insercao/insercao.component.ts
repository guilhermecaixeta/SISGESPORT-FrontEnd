import { DadosTabela } from './../../../../../model/tabela';
import { Component, Input } from '@angular/core';
import { BaseEtapaComponent } from '../../../../../base';
import { isNullOrUndefined } from 'util';
import { I18n, CustomLocalePtBR } from '../../../../../utils/locale.util.component';
import { NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-insercao',
  templateUrl: './insercao.component.html',
  styleUrls: ['./insercao.component.scss'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomLocalePtBR },
    { provide: NgbDateParserFormatter, useClass: CustomLocalePtBR }
  ]
})
export class InsercaoComponent extends BaseEtapaComponent {
  @Input() iniciando: boolean;
  @Input() estadosLista: any[] = [];
  @Input() municipioLista: any[] = [];
  @Input() listaModalidade: any[] = [];
  @Input() listaEventoModalidade: any[] = [];
  desabilitar: boolean = true;
  desabilitarDelecao: boolean;
  useRoute: boolean = false;
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Modalidade', nomeValorColuna: 'modalidadeNome' },
    { nomeColuna: 'Idade Máxima', nomeValorColuna: 'idadeMaximaPermitida' },
    { nomeColuna: 'Sexo', nomeValorColuna: 'sexoNome' }
  ];

  iniciar() {
    this.desabilitarDelecao = this.acao == 'editar';
  }

  validar(lista: any[]): boolean {
    let retorno: boolean = true;
    if (lista.length > 0) {
      let objetoValidacao = lista.find(value =>
        value.modalidade == this.formulario.get('eventoModalidade.modalidade').value &&
        value.sexo == this.formulario.get('eventoModalidade.sexo').value &&
        value.idadeMaximaPermitida == this.formulario.get('eventoModalidade.idadeMaximaPermitida').value);
      if (isNullOrUndefined(objetoValidacao)) {
        retorno = true;
      } else {
        retorno = false;
      }
    }
    return retorno;
  }

  executar(lista: any[]): any[] {
    if (!isNullOrUndefined(lista))
      lista.map(data => {
        data.sexoNome = data['sexo'] == 'F' ? 'Feminino' : 'Masculino';
        data.modalidadeNome = this.ObterItemPorId(this.listaModalidade, data['modalidade'])['nome'];
      });
    return lista;
  }
}
