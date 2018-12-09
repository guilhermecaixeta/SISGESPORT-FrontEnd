import { Component } from '@angular/core';
import { ClassificacaoComponent } from '../gerenciar-evento/classificacao/classificacao.component';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-classificacao-aluno',
  templateUrl: './../gerenciar-evento/classificacao/classificacao.component.html',
  styleUrls: ['./../gerenciar-evento/classificacao/classificacao.component.scss'],
  animations: [routerTransition()]
})
export class ClassificacaoAlunoComponent extends ClassificacaoComponent {

}
