import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// import { CounterService } from '../shared/services/counter.service';
import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubledCount$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select(selectCount);
    this.doubledCount$ = store.select(selectDoubleCount);
  }

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe({
  //     next: (newVal: number) => {
  //       this.counter = newVal;
  //     },
  //     error: (error: any) => {
  //       console.error(error);
  //     },
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}
