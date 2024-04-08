import { Page, TypeProperty, User } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';
import { ElementEntity } from 'src/elements/entities/element.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PageEntity implements Page {
  @ApiProperty({
    description: 'The id of the page',
    type: String,
    example: 'a2606e5e-8fbd-43a3-9e3d-f0b0aa03cb31',
  })
  id: string;

  @ApiProperty({
    description: 'The owner of the page',
    type: UserEntity,
  })
  owner: User;

  @ApiProperty({
    description: 'The owner id of the page',
    type: String,
    example: 'a2606e5e-8fbd-43a3-9e3d-f0b0aa03cb31',
  })
  ownerId: string;

  @ApiProperty({
    description: 'The title of the page',
    type: String,
    example: 'title',
  })
  title: string;

  @ApiProperty({
    description: 'The properties for the elements of the page',
    // type: () => [TypeProperty],
  })
  properties: TypeProperty[];

  @ApiProperty({
    description: 'The creation date of the page',
    type: Date,
    example: '2024-01-20T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The last update date of the page',
    type: Date,
    example: '2024-01-20T00:00:00.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The elements of the page',
    type: ElementEntity,
  })
  elements: Element[];
}
