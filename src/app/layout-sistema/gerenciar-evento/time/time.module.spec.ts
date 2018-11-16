import { TimeModule } from './time.module';

describe('TimeModule', () => {
  let timeModule: TimeModule;

  beforeEach(() => {
    timeModule = new TimeModule();
  });

  it('should create an instance', () => {
    expect(timeModule).toBeTruthy();
  });
});
