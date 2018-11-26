import { Component } from '@angular/core';
import { DadosTabela } from '../../../model/tabela';
import { BaseComponent } from '../../../base';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
  animations: [routerTransition()]
})
export class EventoComponent extends BaseComponent {
  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Nome', nomeValorColuna: 'nome' },
    { nomeColuna: 'Código', nomeValorColuna: 'codigoEvento' },
    { nomeColuna: 'Data início Inscrição', nomeValorColuna: 'dataInicioInscricao' },
    { nomeColuna: 'Data Fim Inscrição', nomeValorColuna: 'dataFimInscricao' },
    { nomeColuna: 'Data Início Evento', nomeValorColuna: 'dataInicio' },
    { nomeColuna: 'Data Fim Evento', nomeValorColuna: 'dataFim' },
  ];
}