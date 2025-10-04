import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties that are not in the DTO
      forbidNonWhitelisted: true, // throws error if extra properties are sent
      transform: true, // transforms payloads to DTO instances
    }),
  );

  await app.listen(process.env.PORT ?? 3005);
  console.log(`App is running on port ${process.env.PORT ?? 3004}`);
}
bootstrap();
