import { EsporteModule } from './esporte.module';

describe('EsporteModule', () => {
  let esporteModule: EsporteModule;

  beforeEach(() => {
    esporteModule = new EsporteModule();
  });

  it('should create an instance', () => {
    expect(esporteModule).toBeTruthy();
  });
});
