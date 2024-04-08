import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PagesController],
  providers: [PagesService],
  imports: [PrismaModule],
})
export class PagesModule {}
