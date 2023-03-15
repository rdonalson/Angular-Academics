import { Component, OnInit } from '@angular/core';
import { from, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

    console.log(`Part A`);
    from([20, 15, 10, 5]).pipe(
      tap(item => console.log(`emitted item .. ${item}`)),
      map((item: number) => item * 2),
      map((item: number) => item - 10),
      map((item: number) => {
        if (item === 0) {
          throw new Error(`zero detected`);
        }
        return item;
      }),
      //take(3)
    ).subscribe({
      next: (item: any) => console.log(`resulting item .. ${item}`),
      error: (err: any) => console.log(`error occurred ${err}`),
      complete: () => console.log(`complete`)
    });

    console.log(`Part B`);
    from([20, 15, 10, 5]).pipe(
      tap(item => console.log(`emitted item .. ${item}`)),
      take(3),
      // these are ignored
      map((item: number) => item * 2),
      tap(item => console.log(item)),

      map((item: number) => item - 10),
      tap(item => console.log(item)),

    ).subscribe({
      next: (item: any) => console.log(`resulting item .. ${item}`),
      error: (err: any) => console.log(`error occurred ${err}`),
      complete: () => console.log(`complete`)
    });
  }

}




