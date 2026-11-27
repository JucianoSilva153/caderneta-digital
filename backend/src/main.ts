import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:5173' });
  app.setGlobalPrefix('api');
  await app.listen(3000);
  console.log('API da Caderneta Digital: http://localhost:3000/api/health');
}

bootstrap();
