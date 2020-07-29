import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userNameIn: string, passwordIn: string) {
    this.currentUser = {
      id: 1,
      userName: userNameIn,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}






