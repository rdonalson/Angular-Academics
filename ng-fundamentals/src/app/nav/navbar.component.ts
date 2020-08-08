import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/shared';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
      .nav.navbar-nav { font-size: 15px;}
      #searchForm { margin-right: 100px;}
      @media (max-width: 1200px) { #searchForm { display: none }}
      li > a.active { color: #f97924}
    `]
})
export class NavBarComponent {
  // tslint:disable-next-line:no-inferrable-types
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(
    public auth: AuthService,
    private eventService: EventService) {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm)
    .subscribe((sessions: ISession[]) => {
        this.foundSessions = sessions;
    });
  }
}


