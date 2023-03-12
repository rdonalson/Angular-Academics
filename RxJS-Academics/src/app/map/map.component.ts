import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private name: string = 'my name';

  constructor() { }

  ngOnInit(): void {
    of(2, 4, 6, 8).pipe(
      map((item: number) => item * 2),
      map((item: number) => item - 1),
      map((item: number) => item * item)
    ).subscribe(x => {
      console.log(x);
    });
  }
}
