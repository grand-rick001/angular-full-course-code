import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

export interface UserProfile {
  name: string;
  age: number;
}

export interface ChatMessage {
  text: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private chatHistorySubject = new ReplaySubject<ChatMessage>(10);

  constructor() {}

  addMessage(message: ChatMessage) {
    this.chatHistorySubject.next(message);
  }
  
  getChatHistory() {
    return this.chatHistorySubject.asObservable();
  }


  // private userProfileSubject = new BehaviorSubject<UserProfile>({
  //   name: 'Guest',
  //   age: 0,
  // });

  // constructor() {}

  // updateUserProfile(newProfile: UserProfile) {
  //   this.userProfileSubject.next(newProfile);
  // }

  // getUserProfile() {
  //   return this.userProfileSubject.asObservable();
  // }

  // private counterSubject = new Subject<number>();
  // private counter = 0;

  // constructor() {
  //   this.counterSubject.subscribe((value) => {
  //     this.counter = value;
  //   });
  // }

  // increment() {
  //   this.counterSubject.next(this.counter + 1);
  // }

  // decrement() {
  //   this.counterSubject.next(this.counter - 1);
  // }

  // getCounter(): number {
  //   return this.counter;
  // }

  // getCounterSubject(): Observable<UserProfile> {
  //   return this.userProfileSubject.asObservable();
  // }
}
