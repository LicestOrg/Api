import { TypeProperty } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({
    description: 'The element id of the property',
    type: Number,
    example: '42',
  })
  @IsNotEmpty()
  elementId: number;

  @ApiProperty({
    description: 'The type of the property',
    // type: TypeProperty,
  })
  @IsNotEmpty()
  type: TypeProperty;

  @ApiProperty({
    description: 'The name of the property',
    type: String,
    example: 'name',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The value of the property',
    type: String,
    example: 'value',
  })
  @IsNotEmpty()
  value: string;
}
