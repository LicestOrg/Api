import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [PrismaService],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();
  });

  it('/auth/register (POST)', async () => {
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

    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: 'password',
      })
      .expect(201);

    expect(response.body).toEqual({
      id: expect.any(String),
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      access_token: expect.any(String),
    });

    expect(prismaService.user.create).toHaveBeenCalledWith({
      data: {
        tag: 'usertag',
        email: 'example@example.com',
        name: 'username',
        password: expect.any(String),
      },
    });
  });

  it('/auth/login (POST)', async () => {
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

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'example@example.com',
        password: 'password',
      })
      .expect(201);

    expect(response.body).toEqual({
      id: 'mockUserId',
      tag: 'usertag',
      email: 'example@example.com',
      name: 'username',
      access_token: expect.any(String),
    });

    expect(prismaService.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'example@example.com' },
    });
  });
});
