import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { Employee } from '../models/employee';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {



  dtOptions: DataTables.Settings = {};
  data: any[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  @Input() fields: any
  @Input() properties: any
  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2    };
    this.http.get('./assets/mock_data2.JSON')
      .map(this.extractData)
      .subscribe(data => {
        this.data = data;
        console.log(data)
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
}
