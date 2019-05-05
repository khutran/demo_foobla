import  User  from '../models/user';
import { Controller }  from './Controller'

export default class UserController extends Controller {
  Model() {
    return User;
  }
};
