import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { CreateUserDto } from './dtos/create.user.dto';
import { CreateUserRespDto } from './dtos/create.user.resp.dto';
import * as _ from 'lodash';
import { BeforeApplicationShutdown, Injectable, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) { }

  onApplicationShutdown(signal?: string) {
    console.log(`onApplicationShutdown -> ${UserService.name}`)
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`beforeApplicationShutdown -> ${UserService.name}`)
  }

  onModuleDestroy() {
    console.log(`onModuleDestroy -> ${UserService.name}`)
  }

  onApplicationBootstrap() {
    console.log(`onApplicationBootstrap -> ${UserService.name}`)
  }

  onModuleInit() {
    console.log(`onMuduleInit -> ${UserService.name}`)
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserRespDto> {
    const user = await this.userRepo.save(createUserDto);
    return _.pick(user, ['loginName', 'userName']);
  }
}