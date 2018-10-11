import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class SearchDataToTableService {
  public data: any
  private subject = new Subject<any>();

  setData(data:any) {
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
