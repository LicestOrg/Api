import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PagesService } from './pages.service';

describe('PagesService', () => {
  let service: PagesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagesService, PrismaService],
    }).compile();

    service = module.get<PagesService>(PagesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of pages', async () => {
    const mockPages = [
      {
        id: 'mockPageId',
        ownerId: 'mockOwnerId',
        title: 'mockPageTitle',
        type: 'mockPageType',
        properties: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(prismaService.page, 'findMany').mockResolvedValue(mockPages);

    const pages = await service.findAll('mockOwnerId');
    expect(pages).toEqual(mockPages);

    expect(prismaService.page.findMany).toHaveBeenCalledWith({
      where: { ownerId: 'mockOwnerId' },
    });
  });

  it('should return a page', async () => {
    const mockPage = {
      id: 'mockPageId',
      ownerId: 'mockOwnerId',
      title: 'mockPageTitle',
      type: 'mockPageType',
      properties: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.page, 'findUnique').mockResolvedValue(mockPage);

    const page = await service.findOne('mockPageId');
    expect(page).toEqual(mockPage);

    expect(prismaService.page.findUnique).toHaveBeenCalledWith({
      where: { id: 'mockPageId' },
    });
  });

  it('should create a page', async () => {
    const mockPage = {
      id: 'mockPageId',
      ownerId: 'mockOwnerId',
      title: 'mockPageTitle',
      type: 'mockPageType',
      properties: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.page, 'create').mockResolvedValue(mockPage);

    const page = await service.create({
      ownerId: 'mockOwnerId',
      title: 'mockPageTitle',
      type: 'mockPageType',
    });
    expect(page).toEqual(mockPage);

    expect(prismaService.page.create).toHaveBeenCalledWith({
      data: {
        ownerId: 'mockOwnerId',
        title: 'mockPageTitle',
        type: 'mockPageType',
      },
    });
  });

  it('should update a page', async () => {
    const mockPage = {
      id: 'mockPageId',
      ownerId: 'mockOwnerId',
      title: 'mockPageTitle',
      type: 'mockPageType',
      properties: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.page, 'update').mockResolvedValue(mockPage);

    const updatedPage = await service.update('mockPageId', {
      title: 'updatedMockPageTitle',
    });
    expect(updatedPage).toEqual(mockPage);

    expect(prismaService.page.update).toHaveBeenCalledWith({
      where: { id: 'mockPageId' },
      data: {
        title: 'updatedMockPageTitle',
      },
    });
  });

  it('should delete a page', async () => {
    const mockPage = {
      id: 'mockPageId',
      ownerId: 'mockOwnerId',
      title: 'mockPageTitle',
      type: 'mockPageType',
      properties: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.page, 'delete').mockResolvedValue(mockPage);

    const deletedPage = await service.remove('mockPageId');
    expect(deletedPage).toEqual(mockPage);

    expect(prismaService.page.delete).toHaveBeenCalledWith({
      where: { id: 'mockPageId' },
    });
  });
});
