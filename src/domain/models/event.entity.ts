import { EventCategory } from './event-category.entity';
import { DeepPartial, Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity(Event.name.toLowerCase())
export class Event extends BaseEntity {
  constructor(input?: DeepPartial<Event>) {
    super(input);
  }

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'start_date' })
  public start_date: Date;

  @Column({ name: 'end_date' })
  public end_date: Date;

  @Column({ name: 'repeat_interval' })
  public repeat_interval: number;

  @ManyToOne(() => EventCategory, (eventCategory) => eventCategory.events)
  type: EventCategory;
}
