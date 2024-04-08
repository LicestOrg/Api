import { ApiProperty } from '@nestjs/swagger';

export class CreatePageDto {
  @ApiProperty({
    description: 'The owner of the page',
    type: String,
    example: 'ownerId',
  })
  ownerId: string;

  @ApiProperty({
    description: 'The title of the page',
    type: String,
    example: 'title',
  })
  title: string;

  @ApiProperty({
    description: 'The content of the page',
    type: String,
    example: 'content',
  })
  content: string;
}
