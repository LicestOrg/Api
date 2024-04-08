import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ElementsService } from './elements.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { ElementEntity } from './entities/element.entity';

@Controller('elements')
@ApiTags('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Create a new element of a page.',
    type: ElementEntity,
  })
  create(@Body() createElementDto: CreateElementDto) {
    return this.elementsService.create(createElementDto);
  }

  @Get(':pageId/elements')
  @ApiOkResponse({
    status: 200,
    description: 'Return all elements by page id.',
    type: [ElementEntity],
  })
  findAll(@Param('pageId') pageId: string) {
    return this.elementsService.findAll(pageId);
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Return an element by id.',
    type: ElementEntity,
  })
  findOne(@Param('id') id: string) {
    return this.elementsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Update an element by id.',
    type: ElementEntity,
  })
  update(@Param('id') id: string, @Body() updateElementDto: UpdateElementDto) {
    return this.elementsService.update(+id, updateElementDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Remove an element by id.',
    type: ElementEntity,
  })
  remove(@Param('id') id: string) {
    return this.elementsService.remove(+id);
  }
}
