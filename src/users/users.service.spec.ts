import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', async () => {
    const mockUsers = [
      {
        id: 'mockUserId',
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(prismaService.user, 'findMany').mockResolvedValue(mockUsers);

    const users = await service.findAll();
    expect(users).toEqual(mockUsers);

    expect(prismaService.user.findMany).toHaveBeenCalledWith();
  });

  it('should return a user', async () => {
    const mockUsers = [
      {
        id: 'mockUserId',
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest
      .spyOn(prismaService.user, 'findUnique')
      .mockResolvedValue(mockUsers[0]);

    const user = await service.findOne('mockUserId');
    expect(user).toEqual(mockUsers[0]);

    expect(prismaService.user.findUnique).toHaveBeenCalledWith({
      where: { id: 'mockUserId' },
    });
  });

  it('should return a new user', async () => {
    const mockUsers = [
      {
        id: 'mockUserId',
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(prismaService.user, 'create').mockResolvedValue(mockUsers[0]);

    const user = {
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      password: 'password',
    };
    const newUser = await service.create(user);
    expect(newUser).toEqual(mockUsers[0]);

    expect(prismaService.user.create).toHaveBeenCalledWith({
      data: {
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: expect.any(String),
      },
    });
  });

  it('should update a user', async () => {
    const mockUsers = [
      {
        id: 'mockUserId',
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(prismaService.user, 'update').mockResolvedValue(mockUsers[0]);

    const user = {
      id: 'mockUserId',
      name: 'newusername',
    };
    const updatedUser = await service.update(user.id, user);
    expect(updatedUser).toEqual(mockUsers[0]);

    expect(prismaService.user.update).toHaveBeenCalledWith({
      where: { id: 'mockUserId' },
      data: { id: 'mockUserId', name: 'newusername' },
    });
  });

  it('should delete a user', async () => {
    const mockUsers = [
      {
        id: 'mockUserId',
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(prismaService.user, 'delete').mockResolvedValue(mockUsers[0]);

    const user = {
      id: 'mockUserId',
    };
    const deletedUser = await service.remove(user.id);
    expect(deletedUser).toEqual(mockUsers[0]);

    expect(prismaService.user.delete).toHaveBeenCalledWith({
      where: { id: 'mockUserId' },
    });
  });
});
