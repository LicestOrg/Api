import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertyEntity } from './entities/property.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('properties')
@ApiTags('properties')
@ApiBearerAuth()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @UseGuards(AuthGuard)
  @Post()
  @ApiCreatedResponse({
    status: 201,
    description: 'Create a new property of an element.',
    type: PropertyEntity,
  })
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @UseGuards(AuthGuard)
  @Get(':elementId/properties')
  @ApiOkResponse({
    status: 200,
    description: 'Return all properties by element id.',
    type: [PropertyEntity],
  })
  findAll(@Param('elementId') elementId: string) {
    return this.propertiesService.findAll(+elementId);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Return a property by id.',
    type: PropertyEntity,
  })
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(+id);
  }

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
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
