// eslint-disable-next-line no-console
import { UserController } from './ioc/UserController';
import { UserService } from './ioc/UserService';
import { UserRepository } from './ioc/userRepository';
import { IUserRepository } from './ioc/IUserRepository';
import { IUserService } from './ioc/IUserService';

console.log('Hello world!');

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);

console.log('Declaration done');

const allUser = userController.getAllUser();
const matureUser = userController.getAllUser();

console.log(allUser[4]); // Track,99
console.log(matureUser[0]); // Max, 20
