import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ElementsService } from './elements.service';

describe('ElementsService', () => {
  let service: ElementsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElementsService, PrismaService],
    }).compile();

    service = module.get<ElementsService>(ElementsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of elements', async () => {
    const mockElements = [
      {
        id: 1,
        pageId: 'mockPageId',
        name: 'mockElementName',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest
      .spyOn(prismaService.element, 'findMany')
      .mockResolvedValue(mockElements);

    const elements = await service.findAll('mockPageId');
    expect(elements).toEqual(mockElements);

    expect(prismaService.element.findMany).toHaveBeenCalledWith({
      where: { pageId: 'mockPageId' },
      include: { properties: true },
    });
  });

  it('should return an element', async () => {
    const mockElement = {
      id: 1,
      pageId: 'mockPageId',
      name: 'mockElementName',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest
      .spyOn(prismaService.element, 'findUnique')
      .mockResolvedValue(mockElement);

    const element = await service.findOne(1);
    expect(element).toEqual(mockElement);

    expect(prismaService.element.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
      include: { properties: true },
    });
  });

  it('should return an updated element', async () => {
    const mockElement = {
      id: 1,
      pageId: 'mockPageId',
      name: 'mockElementName',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.element, 'update').mockResolvedValue(mockElement);

    const updatedElement = await service.update(1, {
      name: 'updatedMockElementName',
    });
    expect(updatedElement).toEqual(mockElement);

    expect(prismaService.element.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        name: 'updatedMockElementName',
        properties: {
          deleteMany: {},
          create: undefined,
        },
      },
    });
  });

  it('should return a deleted element', async () => {
    const mockElement = {
      id: 1,
      pageId: 'mockPageId',
      name: 'mockElementName',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.element, 'delete').mockResolvedValue(mockElement);

    const deletedElement = await service.remove(1);
    expect(deletedElement).toEqual(mockElement);

    expect(prismaService.element.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
