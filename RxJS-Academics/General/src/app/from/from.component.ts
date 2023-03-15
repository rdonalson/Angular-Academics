import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe((item) => {
      console.log(item);
    });

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.log(`error occurred ${err}`),
      complete: () => console.log(`complete`)
    });

    of('apple 1', 'apple 2', 'apple 3').subscribe({
      next: (apple) => console.log(`resulting item .. ${apple}`),
      error: (err) => console.log(`error occurred ${err}`),
      complete: () => console.log(`No more Apples, go home`)
    })
  }
}
