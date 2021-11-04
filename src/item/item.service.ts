import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      const item = await this.itemsRepository.findOneOrFail({
        where: [{ id: id }],
      });
      return item;
    } catch (error) {
      throw new HttpException('Item not Found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    try {
      await this.itemsRepository.findOneOrFail({ id });
      await this.itemsRepository.update({ id }, updateItemDto);
      return this.itemsRepository.find({ id });
    } catch (error) {
      throw new HttpException('Item not Found', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    await this.itemsRepository.delete({ id });
    return { deleted: true };
  }
}
