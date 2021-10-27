import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BarangService } from './barang.service';
import { Barang } from './entities/barang.entity';

@Crud({
  model: {
    type: Barang,
  },
})
@Controller('barang')
export class BarangController {
  constructor(public service: BarangService) {}
}
