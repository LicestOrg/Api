import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyEntity } from './entities/property.entity';

@Controller('properties')
@ApiTags('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Create a new property of an element.',
    type: PropertyEntity,
  })
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get(':elementId/properties')
  @ApiOkResponse({
    status: 200,
    description: 'Return all properties by element id.',
    type: [PropertyEntity],
  })
  findAll(@Param('elementId') elementId: string) {
    return this.propertiesService.findAll(+elementId);
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Return a property by id.',
    type: PropertyEntity,
  })
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Update a property by id.',
    type: PropertyEntity,
  })
  update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Delete a property by id.',
    type: PropertyEntity,
  })
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(+id);
  }
}
