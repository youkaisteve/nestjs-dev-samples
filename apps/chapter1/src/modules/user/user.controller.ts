import { Body, Controller, Inject, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { CreateUserRespDto } from './dtos/create.user.resp.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async get(@Body() createUserDto: CreateUserDto): Promise<CreateUserRespDto> {
    return this.userService.create(createUserDto);
  }
}
