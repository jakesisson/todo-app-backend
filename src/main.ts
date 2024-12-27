import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const jwtSecret = configService.get<string>('JWT_SECRET');
  if (!jwtSecret) {
    throw new Error('❌ JWT_SECRET is not defined in the environment. Make sure to run the setup script.');
  }

  await app.listen(3000);
  Logger.log(`🚀 Application is running on: http://localhost:3000`);
}
bootstrap();
