import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private _spinner = new BehaviorSubject<boolean>(false);
  public readonly spinner$ = this._spinner.asObservable();
  // count: number = 0;

  constructor() {}

  show() {
    setTimeout(() => this._spinner.next(true), 1);
  }

  hide() {
    setTimeout(() => this._spinner.next(false), 300);
  }
}
