import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    const item = await this.itemService.create(createItemDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'item created successfulyy',
      item,
    };
  }

  @Get()
  async findAll() {
    const items = await this.itemService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'items fetched successfulyy',
      items,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const item = await this.itemService.findOne(+id);
    return {
      statusCode: HttpStatus.OK,
      message: 'item fetched successfulyy',
      item,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto) {
    const updatedItem = await this.itemService.update(+id, updateItemDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'item updated successfulyy',
      updatedItem,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.itemService.remove(+id);
    return {
      statusCode: HttpStatus.OK,
      message: 'item deleted successfulyy',
    };
  }
}
