import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';
import { OnModuleInit, Module } from '@nestjs/common';
import { DomainModule } from '../../domain/domain.module';
import { ConfigModule } from '../../common/config/config.module';
import { ServiceModule } from '../services/service.module';

// const dummies: Dummy[] = [
//   new Dummy({
//     date: new Date(),
//   }),
//   new Dummy({
//     date: new Date(),
//   }),
// ];

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    DomainModule,
    ServiceModule,
    // TypeOrmModule.forFeature([Dummy]),
  ],
})
export class SeedModule implements OnModuleInit {
  // @Inject()
  // private dummyService: DummyService;
  async onModuleInit() {
    // await Promise.all(
    // dummies.map(async (u) => {
    //   await this.dummyService.create(u);
    // }),
    // );
  }
}
