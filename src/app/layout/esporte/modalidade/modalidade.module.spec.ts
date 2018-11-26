import { ModalidadeModule } from './modalidade.module';

describe('ModalidadeModule', () => {
  let modalidadeModule: ModalidadeModule;

  beforeEach(() => {
    modalidadeModule = new ModalidadeModule();
  });

  it('should create an instance', () => {
    expect(modalidadeModule).toBeTruthy();
  });
});
