import { User } from './types/User';

export interface IUserService {
  getAllUsers(): User[];
  getMatureUsers(): User[];
}
