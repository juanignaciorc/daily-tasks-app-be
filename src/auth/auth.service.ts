import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/auth/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
}
