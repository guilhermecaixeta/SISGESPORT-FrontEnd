import { EventoAlunoModule } from './evento-aluno.module';

describe('EventoAlunoModule', () => {
  let eventoAlunoModule: EventoAlunoModule;

  beforeEach(() => {
    eventoAlunoModule = new EventoAlunoModule();
  });

  it('should create an instance', () => {
    expect(eventoAlunoModule).toBeTruthy();
  });
});
