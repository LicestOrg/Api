import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: PrismaService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, JwtService, PrismaService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a new user', async () => {
    const mockUser = {
      id: 'mockUserId',
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      password: await bcrypt.hash('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.user, 'create').mockResolvedValue(mockUser);
    jest.spyOn(jwtService, 'sign').mockReturnValue('mockToken');

    const user = {
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      password: 'password',
    };
    const newUser = await service.signUp(user);
    expect(newUser).toEqual({
      id: 'mockUserId',
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      access_token: 'mockToken',
    });
  });

  it('should return a user', async () => {
    const mockUser = {
      id: 'mockUserId',
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      password: await bcrypt.hash('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
    jest.spyOn(jwtService, 'sign').mockReturnValue('mockToken');

    const user = {
      email: 'example@example.com',
      password: 'password',
    };
    const foundUser = await service.signIn(user.email, user.password);
    expect(foundUser).toEqual({
      id: 'mockUserId',
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      access_token: 'mockToken',
    });
  });
});
