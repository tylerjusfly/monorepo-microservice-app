import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signup(@Body() dto: UserDto) {
    return this.userService.Signup(dto);
  }

  @MessagePattern('get_user')
  returnUser(data: number) {
    return this.userService.getUserById(+data);
  }
}
