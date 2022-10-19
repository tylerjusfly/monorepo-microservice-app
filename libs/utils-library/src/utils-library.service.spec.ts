import { Test, TestingModule } from '@nestjs/testing';
import { UtilsLibraryService } from './utils-library.service';

describe('UtilsLibraryService', () => {
  let service: UtilsLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsLibraryService],
    }).compile();

    service = module.get<UtilsLibraryService>(UtilsLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
