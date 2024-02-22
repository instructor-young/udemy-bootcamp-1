import { Test, TestingModule } from '@nestjs/testing';
import { AccommodationsService } from './accommodations.service';

describe('AccommodationsService', () => {
  let service: AccommodationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccommodationsService],
    }).compile();

    service = module.get<AccommodationsService>(AccommodationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
