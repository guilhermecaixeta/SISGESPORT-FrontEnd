import { ClassificacaoAlunoModule } from './classificacao-aluno.module';

describe('ClassificacaoAlunoModule', () => {
  let classificacaoAlunoModule: ClassificacaoAlunoModule;

  beforeEach(() => {
    classificacaoAlunoModule = new ClassificacaoAlunoModule();
  });

  it('should create an instance', () => {
    expect(classificacaoAlunoModule).toBeTruthy();
  });
});
