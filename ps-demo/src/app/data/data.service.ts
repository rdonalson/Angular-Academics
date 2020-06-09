import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://putsreq.com/xa9XbV17cos99QEQL3q6';
  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSetingForm(userSettings: UserSettings): Observable<any> {
    return this.http.post(this.url, userSettings);
  }
}
