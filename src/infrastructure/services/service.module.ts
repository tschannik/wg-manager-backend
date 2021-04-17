import { UserService } from './user.service';
import { User } from './../../domain/models/user.entity';
import { Module, HttpModule } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';

import { ConfigModule } from '../../common/config/config.module';

@Module({
  imports: [ConfigModule, HttpModule, DatabaseModule, TypeOrmModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
})
export class ServiceModule {}
