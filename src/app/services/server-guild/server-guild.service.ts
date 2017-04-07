import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/delay';

@Injectable()
export class ServerGuildService {

  constructor() { }

  authenticate(): Observable<boolean> {
    return Observable.of(true)
      .delay(1000);
  }  

  authorize(): Observable<boolean> {
    return Observable.of(true)
      .delay(1000);
  }
}
