import { TipoAlerta } from './../../../../enum/sisgesport.enum';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseCrudComponent } from '../../../../base';
import { routerTransition } from '../../../../router.animations';
import { Equipe } from '../../../../model/equipe.model';
import { isNullOrUndefined } from 'util';
import { Alerta } from '../../../../model/alerta.model';

@Component({
  selector: 'app-equipe-crud',
  templateUrl: './equipe-crud.component.html',
  styleUrls: ['./equipe-crud.component.scss'],
  animations: [routerTransition()]
})
export class EquipeCrudComponent extends BaseCrudComponent {

  cor: string = '';
  idEvento: number = 0;
  dadosAluno: { nome: string, curso: string } =
    {
      nome: '',
      curso: ''
    };

  value: boolean = false;
  rota: string = 'equipe';
  validacaoCustomizada = true;
  listaTime: any[] = [];
  listaTurma: any[] = [];
  listaCurso: any[] = [];
  listaAluno: any[] = [];
  listaAlunoEquipe: any[] = [];

  formulario = this.construtorFormulario.group({
    equipe: this.construtorFormulario.group({
      nome: [null, [Validators.required]],
      codigoEquipe: [null, { disable: true }],
      cor: [null, [Validators.required]],
      matriculaCapitao: [null, [Validators.required]],
      idCapitao: [null],
      id: [null]
    }),
    aluno: this.construtorFormulario.group({
      instituicao: [null],
      curso: [null],
      turma: [null],
      id: [null]
    })
  });

  validarEtapa() {
    if (this.formulario.controls.equipe.valid)
      this.multiValidacao.eValido = true;
    else {
      this.multiValidacao.formulario = this.construtorFormulario.group({});
      this.multiValidacao.formulario.addControl('equipe', this.formulario.controls.equipe);
      this.multiValidacao.eValido = false;
    }
  }

  iniciar() {
    this.multiValidacao.formulario = this.formulario;
    /**
     * Carrega os cursos relacionados ao instituto selecionado
     */
    this.formulario.get('aluno.instituicao').valueChanges.subscribe(data => {
      this.service.Get('curso/BuscarCursoPorIdInstituicao', data).subscribe(object => {
        this.listaCurso = object.data;
      });
    });
    /**
     * Carrega as turmas relacionadas ao curso escolhido
     */
    this.formulario.get('aluno.curso').valueChanges.subscribe(data => {
      this.service.Get('turma/BuscarPorCursoId', data).subscribe(object => {
        this.formulario.get('aluno.turma').reset();
        this.formulario.get('aluno.id').reset();
        this.listaTurma = object.data;
      });
    });
    /**
     * Obtem todos os alunos da turma
     */
    this.formulario.get('aluno.turma').valueChanges.subscribe(data => {
      if (!isNullOrUndefined(data) && !isNullOrUndefined(this.idEvento))
        this.service.Get('aluno/BuscarPorIdTurmaEEvento', `${data}/${this.idEvento}`).subscribe(object => {
          this.listaAluno = object.data;
        });
    });

    this.formulario.get('equipe.matriculaCapitao').valueChanges.subscribe(data => {
      if (String(data).length > 13) {
        this.service.Get('aluno/BuscarPorMatricula', data).subscribe(valor => {
          this.dadosAluno.nome = valor.data.nome;
          this.dadosAluno.curso = valor.data.turma.curso.nome;
          this.formulario.get('equipe.idCapitao').setValue(valor.data.id);
        },
          () => this.alertas.push(new Alerta(0, TipoAlerta[4], 'Erro ao obter usuário!')));
      }
    });
  }

  aposIniciar() {
    //Equipe
    this.formulario.get('equipe').patchValue(this.objetoRetorno);
    if (this.objetoRetorno.capitao) {
      this.dadosAluno.curso = this.objetoRetorno.capitao.turma.curso.nome;
      this.dadosAluno.nome = this.objetoRetorno.capitao.nome;
      this.formulario.get('equipe.matriculaCapitao').setValue(this.objetoRetorno.capitao.matricula);
    }
    this.idEvento = this.objetoRetorno.evento.id;
    this.cor = this.objetoRetorno.cor;
    //Aluno
    this.formulario.get('aluno.instituicao').setValue(this.objetoRetorno.evento.criador.instituicao.id);
    this.listaAlunoEquipe = this.objetoRetorno.aluno ? this.objetoRetorno.aluno : [];
    if (this.listaAlunoEquipe.length > 0) {
      this.listaAlunoEquipe.map(data => {
        data.curso = this.ObterItemPorId(this.listaAlunoEquipe, data.id)['turma'].curso.nome;
        data.turma = this.ObterItemPorId(this.listaAlunoEquipe, data.id)['turma'].nome;
      });
    }
  }

  Finalizar() {
    let equipe = new Equipe(Object.assign({}, this.formulario.get('equipe').value, { idEvento: this.idEvento }));
    if (isNullOrUndefined(this.listaAlunoEquipe.find(x => x.id == this.formulario.get('equipe.idCapitao').value)))
      this.listaAlunoEquipe.push({ id: this.formulario.get('equipe.idCapitao').value });
    if (this.listaAlunoEquipe.length > 0)
      equipe.AdicionarListaAluno(this.listaAlunoEquipe);
    this.Persistir<Equipe>(equipe);
  }
}