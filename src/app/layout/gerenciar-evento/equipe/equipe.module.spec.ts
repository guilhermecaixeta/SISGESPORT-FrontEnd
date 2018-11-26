import { EquipeModule } from './equipe.module';

describe('EquipeModule', () => {
  let equipeModule: EquipeModule;

  beforeEach(() => {
    equipeModule = new EquipeModule();
  });

  it('should create an instance', () => {
    expect(equipeModule).toBeTruthy();
  });
});
