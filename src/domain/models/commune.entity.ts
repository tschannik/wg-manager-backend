import { DeepPartial, Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Event } from './event.entity';

@Entity(Commune.name.toLowerCase())
export class Commune extends BaseEntity {
  constructor(input?: DeepPartial<Commune>) {
    super(input);
  }

  @Column({ name: 'string' })
  name: string;

  @ManyToMany(() => Event)
  @JoinTable()
  events: Event[];
}
