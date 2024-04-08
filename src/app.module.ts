import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/pages.module';
import { PropertiesModule } from './properties/properties.module';
import { ElementsModule } from './elements/elements.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PagesModule,
    PropertiesModule,
    ElementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
