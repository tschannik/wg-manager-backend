import { Commune } from './commune.entity';
import {
  DeepPartial,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity(User.name.toLowerCase())
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'username' })
  username: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime', nullable: false })
  public updatedAt: Date;

  @ManyToMany(() => Commune)
  @JoinTable()
  communes: Commune[];

  constructor(input?: DeepPartial<User>) {
    if (input) {
      for (const [key, value] of Object.entries(input)) {
        this[key] = value;
      }
    }
  }
}
