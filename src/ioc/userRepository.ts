import { IUserRepository } from './IUserRepository';
import { User } from './types/User';

export class UserRepository implements IUserRepository {
  getUsers(): User[] {
    return [
      { name: 'Max', age: 20 },
      { name: 'Lisa', age: 16 },
      { name: 'Tick', age: 33 },
      { name: 'Trick', age: 66 },
      { name: 'Track', age: 99 },
    ];
  }
}
