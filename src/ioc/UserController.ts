import { User } from './types/User';
import { IUserService } from './IUserService';
import { inject, singleton } from 'tsyringe';

@singleton()
export class UserController {
  private _userService: IUserService;

  constructor(@inject('_userService') protected userService: IUserService) {
    this._userService = userService;
  }
  getAllUser(): User[] {
    return this._userService.getAllUsers();
  }

  getAllMatureUser(): User[] {
    return this._userService.getAllUsers();
  }
}
