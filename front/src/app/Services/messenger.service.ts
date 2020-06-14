import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  counter = new Subject<any>();

  constructor() { }

  sendMsg(product) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }

  sendNumber(counter) {
    this.counter.next({counter});
  }

  getNumber(): Observable<any> {
    return this.counter;
  }

}
