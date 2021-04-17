import { UserCreateDTO } from './../../domain/dto/user-create.dto';
import { UserDAO } from './../../domain/dao/user.dao';
import { User } from './../../domain/models/user.entity';
import { Injectable } from '@nestjs/common';

import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor() {
    super(User);
  }

  async findAll(): Promise<UserDAO[]> {
    return this.userRepository.find();
  }

  async create(payload: UserCreateDTO): Promise<UserDAO> {
    return this.userRepository.save(new User(payload));
  }
}
