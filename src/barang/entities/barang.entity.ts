import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Barang {
  @PrimaryGeneratedColumn()
  idBarang: number;

  @Column()
  nama: string;

  @Column()
  stok: number;
}
