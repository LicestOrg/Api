import { CreatePropertyElementDto } from '../../properties/dto/create-property.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateElementDto {
  @ApiProperty({
    description: 'The page id of the element',
    type: String,
    example: 'a2606e5e-8fbd-43a3-9e3d-f0b0aa03cb31',
  })
  @IsNotEmpty()
  pageId: string;

  @ApiProperty({
    description: 'The properties of the element',
    type: [CreatePropertyElementDto],
  })
  @IsNotEmpty()
  properties: CreatePropertyElementDto[];

  @ApiProperty({
    description: 'The name of the element',
    type: String,
    example: 'name',
  })
  @IsNotEmpty()
  name: string;
}
