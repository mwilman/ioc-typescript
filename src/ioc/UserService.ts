import { IUserService } from './IUserService';
import { User } from './types/User';
import { IUserRepository } from './IUserRepository';
import { inject, injectable, singleton } from 'tsyringe';

@injectable()
export class UserService implements IUserService {
  private _userRepository: IUserRepository;

  constructor(@inject("_userRepository") protected userRepository: IUserRepository) {
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
