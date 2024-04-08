import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PagesService {
  constructor(private prisma: PrismaService) {}

  create(createPageDto: CreatePageDto) {
    return this.prisma.page.create({ data: createPageDto });
  }

  findAll(id: string) {
    return this.prisma.page.findMany({ where: { ownerId: id } });
  }

  findOne(id: string) {
    return this.prisma.page.findUnique({ where: { id } });
  }

  update(id: string, updatePageDto: UpdatePageDto) {
    return this.prisma.page.update({ where: { id }, data: updatePageDto });
  }

  remove(id: string) {
    return this.prisma.page.delete({ where: { id } });
  }
}
