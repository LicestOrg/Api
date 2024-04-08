import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
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
    description: 'The user password',
    type: String,
    example: 'password',
  })
  @IsNotEmpty()
  password: string;
}
