import { Component } from '@angular/core';
import { LoggerService } from 'logging';

@Component({
  selector: 'are-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Angular-Routing-Example';

  constructor(logger: LoggerService){
    logger.log('Hello from Angular');
  }
}
