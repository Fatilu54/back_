export class CreatePedidoDto {
  clienteId: number;
  productos: {
    productoId: number;
    cantidad: number;
  }[];
}
