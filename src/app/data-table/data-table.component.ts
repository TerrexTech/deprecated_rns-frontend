import { Component, OnDestroy, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

interface Person{
  id: number
  firstName: string
  lastName: string
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  dtOptions: any = {};
  data: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  @ViewChild('table') table: any
  @Input() fields: any
  @Input() properties: any
  public dataTable: DataTable;

  dtTrigger: Subject<Person> = new Subject()

  constructor(private http: Http) { }

  ngOnInit(): void {
    console.log
    this.http.get('./assets/mock_data2.JSON')
      .map(res => res.json())
      .map(body => body.data || {})
      .subscribe(data => {
        this.data = data;
        console.log(data)
        this.dtTrigger.next();
    });

    this.dtOptions = {
      // ajax: './assets/mock_data2.JSON',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],
      // Use this attribute to enable the responsive extension
      responsive: true

      //Allows for whole row to be clicked
      // responsive: {
      //       details: {
      //         type: 'column',
      //         target: 'tr',
      //       },
      //       responsive: true
      //     },
      //     columnDefs: [
      //       {
      //         className: 'control',
      //         orderable: true,
      //         targets: 0
      //       }]
      };



    // this.dataTable = {
    //   headerRow: this.fields,
    //   footerRow: this.fields,
    //   dataRows: this.data
    // };
  }
}
