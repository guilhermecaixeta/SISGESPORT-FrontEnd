import { ComponentesFormularioModule } from './componentes-formulario.module';

describe('ComponentesFormularioModule', () => {
  let componentesFormularioModule: ComponentesFormularioModule;

  beforeEach(() => {
    componentesFormularioModule = new ComponentesFormularioModule();
  });

  it('should create an instance', () => {
    expect(componentesFormularioModule).toBeTruthy();
  });
});
