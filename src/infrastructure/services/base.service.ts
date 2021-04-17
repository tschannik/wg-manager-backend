import { Commune } from './../../domain/models/commune.entity';
import { User } from './../../domain/models/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

@Injectable()
export abstract class BaseService<T> {
  @Inject(Connection)
  private readonly connection: Connection;

  @InjectRepository(User)
  protected readonly userRepository: Repository<User>;

  @InjectRepository(Commune)
  protected readonly communeRepository: Repository<Commune>;

  constructor(private readonly entityRef: new () => T) {}

  public async findOne(id: number): Promise<T | null | undefined> {
    return this.connection.getRepository(this.entityRef).findOne(id);
  }
}
