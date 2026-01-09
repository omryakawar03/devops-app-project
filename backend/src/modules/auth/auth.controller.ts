import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";
import { ApiResponse } from "../../common/helpers/response.helper";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  async signup(@Body() body: SignupDto) {
    const createdUser = await this.authService.signup(body.email, body.password);
    return ApiResponse.success("User registered successfully", createdUser);
  }

  @Post("login")
  async login(@Body() body: LoginDto) {
    const result = await this.authService.login(body.email, body.password);
    return ApiResponse.success("User logged in", result);
  }
}
