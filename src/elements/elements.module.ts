import { Module } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { ElementsController } from './elements.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ElementsController],
  providers: [ElementsService],
  imports: [PrismaModule],
})
export class ElementsModule {}
