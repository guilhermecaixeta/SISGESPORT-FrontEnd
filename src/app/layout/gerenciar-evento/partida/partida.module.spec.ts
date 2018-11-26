import { PartidaModule } from './partida.module';

describe('PartidaModule', () => {
  let partidaModule: PartidaModule;

  beforeEach(() => {
    partidaModule = new PartidaModule();
  });

  it('should create an instance', () => {
    expect(partidaModule).toBeTruthy();
  });
});
