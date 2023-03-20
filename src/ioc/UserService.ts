import { IUserService } from './IUserService';
import { User } from './types/User';
import { IUserRepository } from './IUserRepository';

export class UserService implements IUserService {
  private _userRepository: IUserRepository;

  constructor(private userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }
  getAllUsers(): User[] {
    return this._userRepository.getUsers();
  }

  getMatureUsers(): User[] {
    return this._userRepository
      .getUsers()
      .filter((user: User) => user.age > 17);
  }
}
