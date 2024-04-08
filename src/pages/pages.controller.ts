import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PageEntity } from './entities/page.entity';

@Controller('pages')
@ApiTags('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Create a new page owned by a user.',
    type: PageEntity,
  })
  create(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(createPageDto);
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Return all pages by user id.',
    type: [PageEntity],
  })
  findAll(@Param('id') id: string) {
    return this.pagesService.findAll(id);
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Return a page by id.',
    type: PageEntity,
  })
  findOne(@Param('id') id: string) {
    return this.pagesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Update a page by id.',
    type: PageEntity,
  })
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(id, updatePageDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Delete a page by id.',
    type: PageEntity,
  })
  remove(@Param('id') id: string) {
    return this.pagesService.remove(id);
  }
}
