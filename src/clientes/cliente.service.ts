import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async createCliente(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({
      data: {
        nombre: createClienteDto.nombre,
        telefono: createClienteDto.telefono,
        apellido: createClienteDto.apellido,
        modoPago: createClienteDto.modoPago,
      },
    });
  }
}
