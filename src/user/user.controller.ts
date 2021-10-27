import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): any {
    return [{ id: 0 }];
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return {
      id: Number(id),
    };
  }
}
