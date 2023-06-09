import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //service logic here
  public age = 10;
  private name = new BehaviorSubject<string | null>(null);
  public name$ = this.name.asObservable();

  setName(name: string) {
    //this.name = name;
    this.name.next(name);
  }

  getName(): Observable<string | null> {
    return this.name.asObservable();
  }
}
