import { UserDAO } from '../../domain/dao/user.dao';
import { UserCreateDTO } from '../../domain/dto/user-create.dto';
import { UserService } from '../../infrastructure/services/user.service';
import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;

  @Get()
  async findAll(): Promise<UserDAO[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDAO> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() payload: UserCreateDTO): Promise<UserDAO> {
    return this.userService.create(payload);
  }
}
