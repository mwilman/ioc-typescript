import 'reflect-metadata';

import { UserController } from './ioc/UserController';
import { UserService } from './ioc/UserService';
import { UserRepository } from './ioc/userRepository';
import { Container } from 'inversify';
import { TYPES } from './ioc/types/TYPES';

console.log('Hello world!');

const container = new Container();
container.bind<UserRepository>(TYPES.IUserRepository).to(UserRepository).inSingletonScope();
container.bind<UserService>(TYPES.IUserService).to(UserService).inSingletonScope();
container.bind<UserController>(TYPES.UserController).to(UserController).inSingletonScope();

const userRepository = container.get<UserRepository>(TYPES.IUserRepository);
const userService = container.get<UserService>(TYPES.IUserService);
const userController = container.get<UserController>(TYPES.UserController);

console.log('Declaration done');

const allUser = userController.getAllUser();
const matureUser = userController.getAllUser();

console.log(allUser[4]); // Track,99
console.log(matureUser[0]); // Max, 20
