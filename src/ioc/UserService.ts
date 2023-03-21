import { IUserService } from './IUserService';
import { User } from './types/User';
import { IUserRepository } from './IUserRepository';
import { inject, injectable } from 'inversify';
import { TYPES } from './types/TYPES';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TYPES.UserRepository) protected userRepository: IUserRepository) {}
  getAllUsers(): User[] {
    return this.userRepository.getUsers();
  }

  getMatureUsers(): User[] {
    return this.userRepository
      .getUsers()
      .filter((user: User) => user.age > 17);
  }
}
