import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(_id: number): Promise<User> {
    return await this.usersRepository.findOne({
      where: [{ id: _id }],
    });
  }

  async createUser(user: CreateUserDto) {
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(user);
    return newUser;
  }

  async updateUser(id: number, user: UpdateUserDto) {
    await this.usersRepository.update({ id }, user);
    return await this.usersRepository.findOne({ id });
  }

  async deleteUser(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }
}
