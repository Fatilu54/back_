import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Body,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from '../dto/create-pedido.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  async createPedido(@Body() data: CreatePedidoDto) {
    return this.pedidosService.createPedido(data);
  }

  @Put(':pedidoId/productos/:productoId')
  async updateProducto(
    @Param('pedidoId') pedidoId: number,
    @Param('productoId') productoId: number,
    @Body('cantidad') cantidad: number,
  ) {
    return this.pedidosService.updateProductoEnPedido(
      pedidoId,
      productoId,
      cantidad,
    );
  }

  @Delete(':pedidoId/productos/:productoId')
  async deleteProducto(
    @Param('pedidoId') pedidoId: number,
    @Param('productoId') productoId: number,
  ) {
    return this.pedidosService.deleteProductoDePedido(pedidoId, productoId);
  }

  @Get(':id')
  async getPedido(@Param('id') id: number) {
    return this.pedidosService.getPedidoById(id);
  }
}
