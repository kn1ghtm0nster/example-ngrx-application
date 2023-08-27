import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter: number = 0;
  counterChanged = new Subject<number>();

  constructor() {}

  public increment(): void {
    this.counter++;
    this.counterChanged.next(this.counter);
  }

  public decrement(): void {
    this.counter--;
    this.counterChanged.next(this.counter);
  }
}
