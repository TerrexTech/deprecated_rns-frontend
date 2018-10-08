import { Component, OnDestroy, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  data: any[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  @ViewChild('table') table: any
  @Input() fields: any
  @Input() properties: any
  public dataTable: DataTable;

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get('./assets/mock_data2.JSON')
      .map(this.extractData)
      .subscribe(data => {
        this.data = data;
        console.log(data)
      });

    this.dataTable = {
      headerRow: this.fields,
      footerRow: this.fields,
      dataRows: this.data
    };
  }

  ngAfterViewInit(){
    this.table.DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });
  }


  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
}
