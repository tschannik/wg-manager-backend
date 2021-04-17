import { DeepPartial, Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Event } from './event.entity';

@Entity(EventCategory.name.toLowerCase())
export class EventCategory extends BaseEntity {
  constructor(input?: DeepPartial<EventCategory>) {
    super(input);
  }

  @Column({ name: 'name' })
  public name: string;

  @OneToMany(() => Event, (event) => event.type)
  events: Event[];
}
