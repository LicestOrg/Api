import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PropertiesService } from './properties.service';
import { TypeProperty } from '@prisma/client';

describe('PropertiesService', () => {
  let service: PropertiesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertiesService, PrismaService],
    }).compile();

    service = module.get<PropertiesService>(PropertiesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of properties', async () => {
    const mockProperties = [
      {
        id: 1,
        elementId: 1,
        type: TypeProperty.STRING,
        name: 'mockPropertyName',
        value: 'mockPropertyValue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest
      .spyOn(prismaService.property, 'findMany')
      .mockResolvedValue(mockProperties);

    const properties = await service.findAll(1);
    expect(properties).toEqual(mockProperties);

    expect(prismaService.property.findMany).toHaveBeenCalledWith({
      where: { elementId: 1 },
    });
  });

  it('should return a property', async () => {
    const mockProperty = {
      id: 1,
      elementId: 1,
      type: TypeProperty.STRING,
      name: 'mockPropertyName',
      value: 'mockPropertyValue',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest
      .spyOn(prismaService.property, 'findUnique')
      .mockResolvedValue(mockProperty);

    const property = await service.findOne(1);
    expect(property).toEqual(mockProperty);

    expect(prismaService.property.findUnique).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });

  it('should create a property', async () => {
    const mockProperty = {
      id: 1,
      elementId: 1,
      type: TypeProperty.STRING,
      name: 'mockPropertyName',
      value: 'mockPropertyValue',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest
      .spyOn(prismaService.property, 'create')
      .mockResolvedValue(mockProperty);

    const property = await service.create({
      elementId: 1,
      type: TypeProperty.STRING,
      name: 'mockPropertyName',
      value: 'mockPropertyValue',
    });
    expect(property).toEqual(mockProperty);

    expect(prismaService.property.create).toHaveBeenCalledWith({
      data: {
        elementId: 1,
        type: TypeProperty.STRING,
        name: 'mockPropertyName',
        value: 'mockPropertyValue',
      },
    });
  });

  it('should update a property', async () => {
    const mockProperty = {
      id: 1,
      elementId: 1,
      type: TypeProperty.STRING,
      name: 'mockPropertyName',
      value: 'mockPropertyValue',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest
      .spyOn(prismaService.property, 'update')
      .mockResolvedValue(mockProperty);

    const updatedProperty = await service.update(1, {
      name: 'updatedMockPropertyName',
    });
    expect(updatedProperty).toEqual(mockProperty);

    expect(prismaService.property.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        name: 'updatedMockPropertyName',
      },
    });
  });

  it('should delete a property', async () => {
    const mockProperty = {
      id: 1,
      elementId: 1,
      type: TypeProperty.STRING,
      name: 'mockPropertyName',
      value: 'mockPropertyValue',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest
      .spyOn(prismaService.property, 'delete')
      .mockResolvedValue(mockProperty);

    const deletedProperty = await service.remove(1);
    expect(deletedProperty).toEqual(mockProperty);

    expect(prismaService.property.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
