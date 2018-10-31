import { PenalidadeModule } from './penalidade.module';

describe('PenalidadeModule', () => {
  let penalidadeModule: PenalidadeModule;

  beforeEach(() => {
    penalidadeModule = new PenalidadeModule();
  });

  it('should create an instance', () => {
    expect(penalidadeModule).toBeTruthy();
  });
});
