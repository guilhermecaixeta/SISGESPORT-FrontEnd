import { LayoutEnderecoModule } from './layout-endereco.module';

describe('LayoutEnderecoModule', () => {
  let layoutEnderecoModule: LayoutEnderecoModule;

  beforeEach(() => {
    layoutEnderecoModule = new LayoutEnderecoModule();
  });

  it('should create an instance', () => {
    expect(layoutEnderecoModule).toBeTruthy();
  });
});
