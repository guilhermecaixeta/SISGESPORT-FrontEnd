import { ClassificacaoModule } from './classificacao.module';

describe('ClassificacaoModule', () => {
  let classificacaoModule: ClassificacaoModule;

  beforeEach(() => {
    classificacaoModule = new ClassificacaoModule();
  });

  it('should create an instance', () => {
    expect(classificacaoModule).toBeTruthy();
  });
});
