import { ClassificacaoJogadorModule } from './classificacao-jogador.module';

describe('ClassificacaoJogadorModule', () => {
  let classificacaoJogadorModule: ClassificacaoJogadorModule;

  beforeEach(() => {
    classificacaoJogadorModule = new ClassificacaoJogadorModule();
  });

  it('should create an instance', () => {
    expect(classificacaoJogadorModule).toBeTruthy();
  });
});
