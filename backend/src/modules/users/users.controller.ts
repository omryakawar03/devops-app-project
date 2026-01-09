import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwt.guard";
import { User } from "../../common/decorators/user.decorator";

@Controller("users")
export class UsersController {

  @UseGuards(JwtAuthGuard)
  @Get("me")
  getMe(@User() user: any) {
    return { message: `Welcome ${user.email}` };
  }
}
