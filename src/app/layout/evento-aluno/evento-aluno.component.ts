import { Component } from '@angular/core';
import { BaseCrudComponent } from '../../base';
import { routerTransition } from '../../router.animations';
import { DadosTabela } from '../../model/tabela';

@Component({
  selector: 'app-evento-aluno',
  templateUrl: './evento-aluno.component.html',
  styleUrls: ['./evento-aluno.component.scss'],
  animations: [routerTransition()]
})
export class EventoAlunoComponent extends BaseCrudComponent {
  abrirTime: boolean = false;
  bloquear: boolean = true;
  listaEquipe: any[] = [];
  lista: any[] = [];
  idEquipe: number;
  idAluno: number;
  evento: any;

  listaNomeCampo: DadosTabela[] = [
    { nomeColuna: 'Modalidade', nomeValorColuna: 'modalidade' },
    { nomeColuna: 'Vitória', nomeValorColuna: 'numVitoria' },
    { nomeColuna: 'Derrota', nomeValorColuna: 'numDerrota' },
    { nomeColuna: 'Empate', nomeValorColuna: 'numEmpate' },
    { nomeColuna: 'Pontuação', nomeValorColuna: 'pontuacao' }
  ];

  formulario = this.construtorFormulario.group({
    codigo: [null]
  });

  public iniciar() {
    this.observablePadrao.getValue.subscribe(x => {
      if (x.data){
        this.idAluno = x.data.id;
        this.ObterEquipeCadastrada();
      }
    });
    this.formulario.get('codigo').valueChanges.subscribe(code => {
      if (String(code).length > 14)
        this.service.Get('equipe/BuscarPorCodigoEquipe', code)
          .subscribe(result => {
            this.idEquipe = result.data.id;
            this.evento = result.data.evento;
            let dataAtual = new Date();
            let dataInicioInscricao = new Date(result.data.evento.dataInicioInscricao);
            let dataFinalIncricao = new Date(result.data.evento.dataFimInscricao);
            if (dataInicioInscricao > dataAtual) {
              this.bloquear = true;
              this.formulario.get('codigo').setErrors({ eventoDataInscricaoInicioInvalida: true });
            } else if (dataFinalIncricao > dataAtual) {
              this.bloquear = true;
              this.formulario.get('codigo').setErrors({ eventoDataInscricaoFinalInvalida: true });
            } else if (dataInicioInscricao <= dataAtual && dataFinalIncricao <= dataAtual) {
              this.bloquear = false;
            }
          });
    });
  }

  public Cadastrar() {
    this.service.Get('/aluno/AdicionarEquipe', `${this.idAluno}/${this.idEquipe}`).subscribe(
      () => {
        this.abrirTime = false;
        setTimeout(() => { this.abrirTime = true }, 5);
      });
  }

  public executar(lista: any[]): any[] {
    lista.forEach(x => {
      x.modalidade = x.modalidade.nome;
    });
    return lista;
  }

  ObterEquipeCadastrada() {
    this.service.Get('equipe/BuscarEquipePorIdAluno', this.idAluno).subscribe(lista => {
      this.listaEquipe = lista.data;
    });
  }
}