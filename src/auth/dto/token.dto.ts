import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TokenDto {
  @ApiProperty({
    description: 'The access token',
    type: String,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjYwNmU1ZS04ZmJkLTQzYTMtOWUzZC1mMGIwYWEwM2NiMzEiLCJpYXQiOjE2MzIwNzQwNzYsImV4cCI6MTYzMjA3NzY3Nn0.1J9Z6J9J9Z6J9',
  })
  @IsNotEmpty()
  accessToken: string;
}
