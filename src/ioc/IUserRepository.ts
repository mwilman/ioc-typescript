import { User } from './types/User';

export interface IUserRepository {
  getUsers(): User[];
}
