import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit{
  ngOnInit(): void {
    of(2, 4, 6)
      .pipe(
        map(i => {
          if (i === 6) {
            throw 'Error!';
          }
          return i;
        }),
        catchError(err => of('six'))
      ).subscribe({
        next: x => console.log(x),
        error: err => console.log(err)
      });
  }

}
