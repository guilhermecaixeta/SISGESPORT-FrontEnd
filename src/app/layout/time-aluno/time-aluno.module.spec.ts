import { TimeAlunoModule } from './time-aluno.module';

describe('TimeAlunoModule', () => {
  let timeAlunoModule: TimeAlunoModule;

  beforeEach(() => {
    timeAlunoModule = new TimeAlunoModule();
  });

  it('should create an instance', () => {
    expect(timeAlunoModule).toBeTruthy();
  });
});
