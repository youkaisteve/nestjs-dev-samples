import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { CreateUserDto } from './dtos/create.user.dto';
import { CreateUserRespDto } from './dtos/create.user.resp.dto';
import * as _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserRespDto> {
    const user = await this.userRepo.save(createUserDto);
    return _.pick(user, ['loginName', 'userName']);
  }
}
