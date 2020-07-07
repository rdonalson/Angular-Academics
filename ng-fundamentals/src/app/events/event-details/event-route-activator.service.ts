import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import('@angular/router').UrlTree
    | import('rxjs').Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
      const eventExists = !!this.eventService.getEvent(+route.params.id);
      if (!eventExists) {
        this.router.navigate(['/404']);
      }
      return eventExists;
  }
}


