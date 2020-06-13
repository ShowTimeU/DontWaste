import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  counter = new Subject();


  constructor() { }

  sendMsg(product) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }

  sendNumber(counter) {
    return this.counter = counter;
  }

  getNumber() {
    return this.counter.asObservable();
  }

}
