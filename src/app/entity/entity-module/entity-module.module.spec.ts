import { EntityModuleModule } from './entity-module.module';

describe('EntityModuleModule', () => {
  let entityModuleModule: EntityModuleModule;

  beforeEach(() => {
    entityModuleModule = new EntityModuleModule();
  });

  it('should create an instance', () => {
    expect(entityModuleModule).toBeTruthy();
  });
});
