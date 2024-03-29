import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
