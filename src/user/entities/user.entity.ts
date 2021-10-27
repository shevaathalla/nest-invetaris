import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column()
  password: string;
}
