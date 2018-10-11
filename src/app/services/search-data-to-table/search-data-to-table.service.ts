import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SearchDataToTableService {
  private subject1 = new Subject<any>();
  private subject2 = new Subject<any>();
  private subject3 = new Subject<any>();

  setInvData(data:any) {
    this.subject1.next(data);
  }

  setMetData(data: any) {
    this.subject2.next(data);
  }

  setDevData(data: any) {
    this.subject3.next(data);
  }

  getInvData(): Observable<any> {
    return this.subject1.asObservable()
  }

  getMetData(): Observable<any> {
    return this.subject2.asObservable();
  }

  getDevData(): Observable<any> {
    return this.subject3.asObservable();
  }
}
