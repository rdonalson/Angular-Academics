import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id ]" class='well hoverwell thumbnail'>
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date:  {{ event?.date | date:'shortDate' }}</div>
      <div  [ngStyle]="getStartTimeStyle()"
          [ngSwitch]='event?.time'>
          Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault >(Normal Start)</span>
      </div>
      <div>Price: {{ event?.price | currency:'USD' }}</div>
      <div *ngIf='event?.location?.address'>
        <span>Location:  {{ event?.location?.address }}</span>
        <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div *ngIf='event?.onlineUrl'>
        Online URL: {{ event?.onlineUrl }}
      </div>
    </div>
  `,
  styles: [`
    .green { color: #003300 !important }
    .bold { font-weight: bold !important }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeStyle(){
    if (this.event && this.event.time === '8:00 am') {
      return {color: 'green', 'font-weight': 'bold'};
    }
    return [];
  }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart};
  }

}
