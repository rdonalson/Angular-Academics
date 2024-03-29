import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class AuthService {

  currentUser: IUser;

  constructor(private http: HttpClient) {}
  loginUser(userNameIn: string, passwordIn: string): any {
    const loginInfo = { username: userNameIn, password: passwordIn };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        // tslint:disable-next-line: no-string-literal
        this.currentUser = (data['user'] as IUser);
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }


  isAuthenticated(){
    return !!this.currentUser;
  }

  checkAuthenticationStatus(): any {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = (data as IUser);
        }
      }))
      .subscribe();
  }

  updateCurrentUser({ firstName, lastName }: { firstName: string; lastName: string; }){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }
}







