import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  // tslint:disable-next-line: no-inferrable-types
  loginInvalid: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  login(formValues: { userName: string; password: string; }) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe((resp: any) => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}





