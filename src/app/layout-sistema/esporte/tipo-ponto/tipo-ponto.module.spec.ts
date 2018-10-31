import { TipoPontoModule } from './tipo-ponto.module';

describe('TipoPontoModule', () => {
  let tipoPontoModule: TipoPontoModule;

  beforeEach(() => {
    tipoPontoModule = new TipoPontoModule();
  });

  it('should create an instance', () => {
    expect(tipoPontoModule).toBeTruthy();
  });
});
