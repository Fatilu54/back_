import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Permitir solo el origen del frontend
  });
  await app.listen(3001);
  console.log(`Servidor escuchando en el puerto 3001`);
}
bootstrap();
