import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { Users } from './modules/users/users.entity';
@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,   TypeOrmModule.forRoot({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Users],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false
  }
}),],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}