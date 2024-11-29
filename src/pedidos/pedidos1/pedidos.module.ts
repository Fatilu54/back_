import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService],
  imports: [PrismaModule],
})
export class PedidosModule {}
