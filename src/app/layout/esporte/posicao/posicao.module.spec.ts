import { PosicaoModule } from './posicao.module';

describe('PosicaoModule', () => {
  let posicaoModule: PosicaoModule;

  beforeEach(() => {
    posicaoModule = new PosicaoModule();
  });

  it('should create an instance', () => {
    expect(posicaoModule).toBeTruthy();
  });
});
