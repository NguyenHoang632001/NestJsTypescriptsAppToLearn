import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//controller will call services to do implementations
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log('success start');
  });
}
bootstrap();
