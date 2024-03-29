import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ps-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };
  startDate: Date;
  startTime: Date;
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  singleModel = 'On';
  userRating = 0;
  maxRating = 10;
  isReadonly = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    // if (form.valid) {
    //   this.dataService.postUserSetingForm(this.userSettings).subscribe(
    //     (result) => console.log('On Success: ', result),
    //     (error) => this.onHttpError(error)
    //   );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors';
    // }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }
}
