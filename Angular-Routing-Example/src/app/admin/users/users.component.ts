import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'are-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];
  // tslint:disable-next-line: no-inferrable-types
  hasPermission: boolean = true;
  constructor() { }

  ngOnInit(): void {
    if (this.hasPermission) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: 'john', email: 'john@angular.com'},
      { name: 'colleen', email: 'colleen@angular.com'}
    ];
  }

}
