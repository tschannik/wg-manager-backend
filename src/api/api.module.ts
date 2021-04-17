import { CommuneController } from './controllers/commune.controller';
import { Module } from '@nestjs/common';
import { ServiceModule } from '../infrastructure/services/service.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [ServiceModule],
  controllers: [UserController, CommuneController],
  exports: [],
})
export class ApiModule {}
