import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('int')
  stock: number;
}
