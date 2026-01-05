import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserEntity } from './interfaces/user.interface.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}


  async create(data: CreateUserDto): Promise<UserEntity> {
    return this.prisma.client.user.create({ data });
  }


  async findAll(): Promise<UserEntity[]> {
    return this.prisma.client.user.findMany();
  }


  async update(id: number, data: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.client.user.update({
      where: { id },
      data,
    });
  }


  async delete(id: number): Promise<UserEntity> {
    return this.prisma.client.user.delete({ where: { id } });
  }
}
