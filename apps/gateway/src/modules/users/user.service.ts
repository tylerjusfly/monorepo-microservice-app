import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async Signup(dtoData: UserDto) {
    try {
      if (!dtoData.email || !dtoData.password) {
        throw new ForbiddenException('All fields are required!');
      }

      const user = await this.userRepository.save({
        email: dtoData.email,
        password: dtoData.password,
      });

      return user;
    } catch (error) {
      //return error
      throw error;
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id });

      if (!user) {
        return { success: false, message: 'user not found' };
      }

      return { success: true, user };
    } catch (error) {
      throw error;
    }
  }
}
