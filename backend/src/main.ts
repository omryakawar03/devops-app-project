import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from "./common/filters/http-exception.filter";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
   app.enableCors({
    origin: "*",
  });
    app.setGlobalPrefix("api");
     app.useGlobalFilters(new GlobalExceptionFilter());
}
bootstrap();
