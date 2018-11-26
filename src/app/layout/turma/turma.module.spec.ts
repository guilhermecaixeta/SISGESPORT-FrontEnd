import { TurmaModule } from './turma.module';

describe('TurmaModule', () => {
  let turmaModule: TurmaModule;

  beforeEach(() => {
    turmaModule = new TurmaModule();
  });

  it('should create an instance', () => {
    expect(turmaModule).toBeTruthy();
  });
});
