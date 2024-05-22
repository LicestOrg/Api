import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({
    description: 'The email of the user',
    type: String,
    example: 'example@example.com',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    example: 'password',
  })
  @IsNotEmpty()
  password: string;
}
