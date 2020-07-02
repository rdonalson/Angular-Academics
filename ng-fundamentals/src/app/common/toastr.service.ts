import { Injectable } from "@angular/core";


@Injectable()
export class ToastrService {
  success(message: string, title?: string): void {
    toastr.success(message, title);
  }
}


