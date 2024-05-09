import { Injectable } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ElementsService {
  constructor(private prisma: PrismaService) {}

  create(createElementDto: CreateElementDto) {
    return this.prisma.element.create({
      data: {
        ...createElementDto,
        properties: {
          create: createElementDto.properties,
        },
      },
    });
  }

  findAll(pageId: string) {
    return this.prisma.element.findMany({
      where: { pageId },
      include: { properties: true },
    });
  }

  findOne(id: number) {
    return this.prisma.element.findUnique({
      where: { id },
      include: { properties: true },
    });
  }

  update(id: number, updateElementDto: UpdateElementDto) {
    return this.prisma.element.update({
      where: { id },
      data: {
        ...updateElementDto,
        properties: {
          deleteMany: {},
          create: updateElementDto.properties,
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.element.delete({ where: { id } });
  }
}
