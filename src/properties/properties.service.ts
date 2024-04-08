import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  create(createPropertyDto: CreatePropertyDto) {
    return this.prisma.property.create({ data: createPropertyDto });
  }

  findAll(elementId: number) {
    return this.prisma.property.findMany({ where: { elementId } });
  }

  findOne(id: number) {
    return this.prisma.property.findUnique({ where: { id } });
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.prisma.property.update({
      where: { id },
      data: updatePropertyDto,
    });
  }

  remove(id: number) {
    return this.prisma.property.delete({ where: { id } });
  }
}
