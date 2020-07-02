import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let toastr: { success: (arg0: any) => void; };

@Component({
  selector: 'app-events-list',
  template: `
      <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5">
            <app-event-thumbnail
                [event]='event'
                (click)='handleThumbnailClick(event.name)'
              >
            </app-event-thumbnail>
          </div>
        </div>
      </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(
    private eventService: EventService
  ){ }
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(data: any): void {
    toastr.success(data);
  }

}




