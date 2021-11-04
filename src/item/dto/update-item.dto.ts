import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  stock: number;
}
