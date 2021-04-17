import { EventCategory } from './models/event-category.entity';
import { Commune } from './models/commune.entity';
import { User } from './models/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './models/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Commune, Event, EventCategory])],
  providers: [],
  exports: [],
})
export class DomainModule {}
