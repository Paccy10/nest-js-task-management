import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDTO);
  }

  @Post('/login')
  login(
    @Body(ValidationPipe) authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authCredentialsDTO);
  }
}
