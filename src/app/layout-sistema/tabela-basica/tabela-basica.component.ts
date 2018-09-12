import { DadosTabela } from './../../entity/tabela';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-basica',
  templateUrl: './tabela-basica.component.html',
  styleUrls: ['./tabela-basica.component.scss']
})
export class TabelaBasicaComponent implements OnInit {

  @Input() legenda: string = '';
  @Input() listaValorCampo: any[] = [{nome: 'Guilherme', idade:25}, {nome: 'Aline', idade:19}];
  @Input() listaNomeCampo: DadosTabela[] = [{nomeColuna: 'Nome', nomeValorColuna:'nome'}, {nomeColuna: 'Idade', nomeValorColuna:'idade'}];
  
  constructor() { }
  ngOnInit() {  }
}
