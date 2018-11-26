import { CursoModule } from './curso.module';

describe('CursoModule', () => {
  let cursoModule: CursoModule;

  beforeEach(() => {
    cursoModule = new CursoModule();
  });

  it('should create an instance', () => {
    expect(cursoModule).toBeTruthy();
  });
});
