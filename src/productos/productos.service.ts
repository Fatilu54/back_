import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async obtenerProductos() {
    return await this.prisma.producto.findMany(); // Obtén todos los productos desde la base de datos con Prisma
  }
}
