import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from your frontend origin
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Include credentials like cookies or authorization headers
  });

  await app.listen(3000);
  Logger.log('🚀 Server is running on http://localhost:3000');
}
bootstrap();