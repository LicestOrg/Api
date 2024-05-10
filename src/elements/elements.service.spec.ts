import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ElementsService } from './elements.service';

describe('ElementsService', () => {
  let service: ElementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ElementsService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ElementsService>(ElementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
