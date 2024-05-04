import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserAuthDto {
  @ApiProperty({
    description: 'The tag of the user',
    type: String,
    example: 'usertag',
  })
  @IsNotEmpty()
  tag: string;

  @ApiProperty({
    description: 'The email of the user',
    type: String,
    example: 'example@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The user username',
    type: String,
    example: 'username',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The token of the user',
    type: String,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjYwNmU1ZS04ZmJkLTQzYTMtOWUzZC1mMGIwYWEwM2NiMzEiLCJpYXQiOjE2MzIwNzQwNzYsImV4cCI6MTYzMjA3NzY3Nn0.1J9Z6J9J9Z6J9',
  })
  @IsNotEmpty()
  access_token: string;
}
