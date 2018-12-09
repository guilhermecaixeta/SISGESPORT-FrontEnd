import { PartidaComponent } from './../gerenciar-evento/partida/partida.component';
import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-partida-aluno',
  templateUrl: './../gerenciar-evento/partida/partida.component.html',
  styleUrls: ['./../gerenciar-evento/partida/partida.component.scss'],
  animations: [routerTransition()]
})
export class PartidaAlunoComponent extends PartidaComponent { }