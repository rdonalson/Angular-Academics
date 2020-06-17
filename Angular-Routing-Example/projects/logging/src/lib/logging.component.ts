import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-logging',
  template: `
    <p>
      logging works!
    </p>
  `,
  styles: [
  ]
})
export class LoggingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
