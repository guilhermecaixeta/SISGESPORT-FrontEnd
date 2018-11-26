import { TabelaBasicaModule } from './tabela-basica.module';

describe('TabelaBasicaModule', () => {
  let tabelaBasicaModule: TabelaBasicaModule;

  beforeEach(() => {
    tabelaBasicaModule = new TabelaBasicaModule();
  });

  it('should create an instance', () => {
    expect(tabelaBasicaModule).toBeTruthy();
  });
});
