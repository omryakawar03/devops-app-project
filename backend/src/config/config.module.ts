import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envValidationSchema } from "./validation";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
      envFilePath: ".env",
    }),
  ],
})
export class AppConfigModule {}
