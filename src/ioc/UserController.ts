import { User } from './types/User';
import { IUserService } from './IUserService';
import { inject, injectable } from 'inversify';
import { TYPES } from './types/TYPES';

@injectable()
export class UserController {
  constructor(@inject(TYPES.UserService) protected userService: IUserService) {}
  getAllUser(): User[] {
    return this.userService.getAllUsers();
  }

  getAllMatureUser(): User[] {
    return this.userService.getAllUsers();
  }
}
