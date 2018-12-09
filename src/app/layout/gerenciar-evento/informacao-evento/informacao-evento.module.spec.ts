import { InformacaoEventoModule } from './informacao-evento.module';

describe('InformacaoEventoModule', () => {
  let informacaoEventoModule: InformacaoEventoModule;

  beforeEach(() => {
    informacaoEventoModule = new InformacaoEventoModule();
  });

  it('should create an instance', () => {
    expect(informacaoEventoModule).toBeTruthy();
  });
});
