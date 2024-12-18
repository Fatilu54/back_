import { Controller, Get } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  async obtenerProductos() {
    return await this.productosService.obtenerProductos();
  }
}
