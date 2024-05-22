import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags, ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserAuthDto } from './dto/user-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully registered.',
    type: UserAuthDto,
  })
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('login')
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully logged in.',
    type: UserAuthDto,
  })
  signIn(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.signIn(loginAuthDto.email, loginAuthDto.password);
  }
}
