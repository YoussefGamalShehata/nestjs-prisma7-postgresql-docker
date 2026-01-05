import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  async update(id: number, data: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({ where: { id } });
  }
}
