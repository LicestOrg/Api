import { Element, Page, Property } from '@prisma/client';
import { PageEntity } from 'src/pages/entities/page.entity';
import { PropertyEntity } from 'src/properties/entities/property.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ElementEntity implements Element {
  @ApiProperty({
    description: 'The id of the element',
    type: Number,
    example: '42',
  })
  id: number;

  @ApiProperty({
    description: 'The page of the element',
    type: PageEntity,
  })
  page: Page;

  @ApiProperty({
    description: 'The page id of the element',
    type: String,
    example: 'a2606e5e-8fbd-43a3-9e3d-f0b0aa03cb31',
  })
  pageId: string;

  @ApiProperty({
    description: 'The properties of the element',
    type: [PropertyEntity],
  })
  properties: Property[];

  @ApiProperty({
    description: 'The creation date of the element',
    type: Date,
    example: '2024-01-20T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The last update date of the element',
    type: Date,
    example: '2024-01-20T00:00:00.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The type of the element',
    type: String,
    example: 'type',
  })
  type: string;

  @ApiProperty({
    description: 'The name of the element',
    type: String,
    example: 'name',
  })
  name: string;
}
