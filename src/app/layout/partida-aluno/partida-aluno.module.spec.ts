import { PartidaAlunoModule } from './partida-aluno.module';

describe('PartidaAlunoModule', () => {
  let partidaAlunoModule: PartidaAlunoModule;

  beforeEach(() => {
    partidaAlunoModule = new PartidaAlunoModule();
  });

  it('should create an instance', () => {
    expect(partidaAlunoModule).toBeTruthy();
  });
});
