import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'ps-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

}
