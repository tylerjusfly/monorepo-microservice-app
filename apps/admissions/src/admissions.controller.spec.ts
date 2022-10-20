import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionsController } from './admissions.controller';
import { AdmissionsService } from './admissions.service';

describe('AdmissionsController', () => {
  let admissionsController: AdmissionsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionsController],
      providers: [AdmissionsService],
    }).compile();

    admissionsController = app.get<AdmissionsController>(AdmissionsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(admissionsController.getHello()).toBe('Hello World!');
    });
  });
});
