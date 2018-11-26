import { GerenciarEventoModule } from './gerenciar-evento.module';

describe('GerenciarEventoModule', () => {
  let gerenciarEventoModule: GerenciarEventoModule;

  beforeEach(() => {
    gerenciarEventoModule = new GerenciarEventoModule();
  });

  it('should create an instance', () => {
    expect(gerenciarEventoModule).toBeTruthy();
  });
});
