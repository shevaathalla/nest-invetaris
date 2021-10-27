import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    const newUser = await this.userService.createUser(user);
    return {
      statusCode: HttpStatus.OK,
      message: 'users created successfulyy',
      newUser,
    };
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'users fetched successfulyy',
      users,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(Number(id));
    return {
      statusCode: HttpStatus.OK,
      message: 'user fetched successfulyy',
      user,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    const updatedUser = await this.userService.updateUser(Number(id), user);
    return {
      statusCode: HttpStatus.OK,
      message: 'user updated successfulyy',
      updatedUser,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.userService.deleteUser(Number(id));
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
