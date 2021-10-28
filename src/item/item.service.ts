import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const newItem = this.itemsRepository.create(createItemDto);
    await this.itemsRepository.save(newItem);

    return newItem;
  }

  async findAll() {
    return await this.itemsRepository.find();
  }

  async findOne(id: number) {
    return await this.itemsRepository.findByIds([id]);
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    await this.itemsRepository.update({ id }, updateItemDto);
    return this.itemsRepository.find({ id });
  }

  async remove(id: number) {
    await this.itemsRepository.delete({ id });
    return { deleted: true };
  }
}
