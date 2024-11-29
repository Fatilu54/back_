import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePedidoDto } from '../../pedidos/dto/create-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  async createPedido(data: CreatePedidoDto) {
    return this.prisma.pedido.create({
      data: {
        clienteId: data.clienteId,
        pedidoProductos: {
          create: data.productos.map((p) => ({
            productoId: p.productoId,
            cantidad: p.cantidad,
          })),
        },
      },
      include: { pedidoProductos: true },
    });
  }

  async updateProductoEnPedido(
    pedidoId: number,
    productoId: number,
    cantidad: number,
  ) {
    return this.prisma.pedidoProductos.updateMany({
      where: { pedidoId, productoId },
      data: { cantidad },
    });
  }

  async deleteProductoDePedido(pedidoId: number, productoId: number) {
    return this.prisma.pedidoProductos.deleteMany({
      where: { pedidoId, productoId },
    });
  }

  async getPedidoById(id: number) {
    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        pedidoProductos: {
          include: {
            producto: true,
          },
        },
      },
    });

    const total = pedido.pedidoProductos.reduce((sum, pedidoProducto) => {
      return sum + pedidoProducto.producto.precio * pedidoProducto.cantidad;
    }, 0);

    return { ...pedido, total };
  }
}
