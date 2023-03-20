import { IUserService } from './IUserService';
import { User } from './types/User';
import { IUserRepository } from './IUserRepository';
import { inject, injectable, singleton } from 'tsyringe';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject('_userRepository') protected userRepository: IUserRepository,
  ) {}
  getAllUsers(): User[] {
    return this.userRepository.getUsers();
  }

  getMatureUsers(): User[] {
    return this.userRepository.getUsers().filter((user: User) => user.age > 17);
  }
}
