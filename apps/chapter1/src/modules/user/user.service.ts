import { Repository } from 'typeorm';
import { UserEntity } from '../../entities/user.entity';
import { CreateUserDto } from './dtos/create.user.dto';
import { CreateUserRespDto } from './dtos/create.user.resp.dto';
import _ from 'lodash';

export class UserService {
  constructor(private readonly userRepo: Repository<UserEntity>) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserRespDto> {
    const user = await this.userRepo.save(createUserDto);
    return _.pick(user, ['loginName', 'userName']);
  }
}
