import { Module } from '@nestjs/common';
import { ProductosController } from './producto.controller';
import { ProductosService } from './productos.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService, PrismaService],
})
export class ProductosModule {}
