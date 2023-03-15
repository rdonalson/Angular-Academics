import { Component, OnInit } from '@angular/core';
import { of, tap, map } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(2, 4, 6, 8).pipe(
      tap(item => console.log(item)),
      map((item: number) => item * 2),
      tap(item => console.log(item)),
      map((item: number) => item - 1),
      tap(item => console.log(item)),
      map((item: number) => item * item),
      tap(item => console.log(item))
    ).subscribe();
  }

}
