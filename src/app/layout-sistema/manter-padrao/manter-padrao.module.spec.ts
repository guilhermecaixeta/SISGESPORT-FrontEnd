import { ManterPadraoModule } from './manter-padrao.module';

describe('ManterPadraoModule', () => {
  let manterPadraoModule: ManterPadraoModule;

  beforeEach(() => {
    manterPadraoModule = new ManterPadraoModule();
  });

  it('should create an instance', () => {
    expect(manterPadraoModule).toBeTruthy();
  });
});
