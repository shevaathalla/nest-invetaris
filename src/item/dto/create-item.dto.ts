import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  stock: number;
}
