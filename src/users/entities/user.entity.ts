import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty({
    description: 'The id of the user',
    type: String,
    example: 'a2606e5e-8fbd-43a3-9e3d-f0b0aa03cb31',
  })
  id: string;

  @ApiProperty({
    description: 'The tag of the user',
    type: String,
    example: 'tag',
  })
  tag: string;

  @ApiProperty({
    description: 'The email of the user',
    type: String,
    example: 'example@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The user username',
    type: String,
    example: 'username',
  })
  name: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: 'password',
  })
  password: string;

  @ApiProperty({
    description: 'The creation date of the user',
    type: Date,
    example: '2024-01-20T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The last update date of the user',
    type: Date,
    example: '2024-01-20T00:00:00.000Z',
  })
  updatedAt: Date;
}
