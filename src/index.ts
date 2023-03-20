// eslint-disable-next-line no-console
import 'reflect-metadata';
import { container, Lifecycle } from 'tsyringe';
import { UserRepository } from './ioc/userRepository';
import { UserService } from './ioc/UserService';
import { UserController } from './ioc/UserController';

console.log('Hello world!');

const childContainer = container.createChildContainer();

childContainer.register('_userRepository', UserRepository, {lifecycle: Lifecycle.Singleton});
childContainer.register('_userService', UserService);

const userRepository = childContainer.resolve<UserRepository>("_userRepository");
const userService = childContainer.resolve<UserService>('_userService');
const userController = childContainer.resolve(UserController);
/*
const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);
*/

console.log('Declaration done');


const allUser = userController.getAllUser();
const matureUser = userController.getAllUser();


console.log(allUser[4]); // Track,99
console.log(matureUser[0]); // Max, 20
