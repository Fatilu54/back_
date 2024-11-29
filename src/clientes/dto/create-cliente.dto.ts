export class CreateClienteDto {
  nombre: string;
  apellido: string;
  telefono: string;
  modoPago: 'efectivo' | 'transferencia' | 'tarjeta';
}
