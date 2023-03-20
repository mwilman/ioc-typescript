import { User } from './types/User';
import { IUserService } from './IUserService';
import { inject, singleton } from 'tsyringe';

@singleton()
export class UserController {
  constructor(@inject('_userService') protected userService: IUserService) {}
  getAllUser(): User[] {
    return this.userService.getAllUsers();
  }

  getAllMatureUser(): User[] {
    return this.userService.getAllUsers();
  }
}
