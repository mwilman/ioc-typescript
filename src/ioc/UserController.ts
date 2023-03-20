import { User } from './types/User';
import { IUserService } from './IUserService';

export class UserController {
  private _userService: IUserService;

  constructor(private userService: IUserService) {
    this._userService = userService;
  }
  getAllUser(): User[] {
    return this._userService.getAllUsers();
  }

  getAllMatureUser(): User[] {
    return this._userService.getAllUsers();
  }
}
