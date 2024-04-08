import { Property, Element, TypeProperty } from '@prisma/client';
import { ElementEntity } from 'src/elements/entities/element.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PropertyEntity implements Property {
  @ApiProperty({
    description: 'The id of the property',
    type: Number,
    example: '42',
  })
  id: number;

  @ApiProperty({
    description: 'The element of the property',
    type: ElementEntity,
  })
  element: Element;

  @ApiProperty({
    description: 'The element id of the property',
    type: Number,
    example: '42',
  })
  elementId: number;

  @ApiProperty({
    description: 'The type of the property',
    // type: TypeProperty,
  })
  type: TypeProperty;

  @ApiProperty({
    description: 'The name of the property',
    type: String,
    example: 'name',
  })
  name: string;

  @ApiProperty({
    description: 'The value of the property',
    type: String,
    example: 'value',
  })
  value: string;
}
