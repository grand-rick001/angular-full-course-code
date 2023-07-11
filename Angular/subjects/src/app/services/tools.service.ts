import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private counterSubject = new Subject<number>();
  private counter = 0;

  constructor() {
    this.counterSubject.subscribe((value) => {
      this.counter = value;
    });
  }

  increment() {
    this.counterSubject.next(this.counter + 1);
  }

  decrement() {
    this.counterSubject.next(this.counter - 1);
  }

  getCounter(): number {
    return this.counter;
  }

  getCounterSubject(): Observable<number> {
    return this.counterSubject.asObservable();
  }
}
