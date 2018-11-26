import { JogadorModule } from './jogador.module';

describe('JogadorModule', () => {
  let jogadorModule: JogadorModule;

  beforeEach(() => {
    jogadorModule = new JogadorModule();
  });

  it('should create an instance', () => {
    expect(jogadorModule).toBeTruthy();
  });
});
