import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  // asdsad
}