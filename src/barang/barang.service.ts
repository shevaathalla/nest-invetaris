import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Barang } from './entities/barang.entity';

@Injectable()
export class BarangService extends TypeOrmCrudService<Barang> {
  constructor(@InjectRepository(Barang) repo) {
    super(repo);
  }
}
