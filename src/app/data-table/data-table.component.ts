import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core'
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material'
import { Http } from '@angular/http'
import { LoadInventoryJsonService } from '../services/load-inventory-json/load-inventory-json.service'
import { Inventory } from "../models/inventory"
import { SelectionModel } from '@angular/cdk/collections'
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from "sweetalert";
var Food: Inventory[] = []

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class DataTableComponent implements OnInit {
  dtOptions: any = {};
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  @ViewChild('table') table: any
  @Input() displayedColumns: string[]
  @Input() jsonFields: string[]

  //add device ID to shown rows
  dataSource = new MatTableDataSource()
  today: number = Date.now()
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  @ViewChild("query") query: ElementRef
  @ViewChild("field") field: ElementRef
  @ViewChild("formDate") formDate: ElementRef

  selection = new SelectionModel<Inventory>(true, [])

  constructor(private http: Http, private loadInventoryJsonService: LoadInventoryJsonService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadInventoryJsonService.getJSON()
      .subscribe(data => {
        console.log(data)
        this.dataSource.data = data
        Food = data
      })
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  getData(): void {
    this.loadInventoryJsonService.getJSON()
      .subscribe(data => {
        console.log(data)
        this.dataSource.data = data
        Food = data
      })
  }

  getSearchData(query, field) {
    this.loadInventoryJsonService.getSearchJSON(query, field)
      .subscribe(data => {
        console.log(data)
        this.dataSource.data = data
        Food = data
      })
  }

  resetData() {
    this.loadInventoryJsonService.getJSON()
      .subscribe(data => {
        console.log(data)
        this.dataSource.data = data
        Food = data
      })
  }

  //make method more efficient in future
  removeSelectedRows() {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Yes", "No"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (!willDelete) {
          this.selection.selected.forEach(item => {
            let index: number = Food.findIndex(d => d === item)
            console.log("++++++++++++++++++==")
            this.loadInventoryJsonService.deleteRow(item.item_id)
          })
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Inventory not removed");
        }
      });
  }

  curField: any

  // populateFields(e): Inventory {
  //   console.log(e)
  //   if (e != null) {
  //     this.curField = Food.filter(i => i.item_id === e)[0]
  //     this.dialog.open(DialogDataDialog, {
  //       width: '500px',
  //       data: {
  //         data: this.curField
  //       }
  //     }).afterClosed().subscribe(result => {
  //       this.loadInventoryJsonService.getJSON()
  //         .subscribe(data => {
  //           console.log(data)
  //           this.dataSource.data = data
  //           Food = data
  //         })
  //     })
  //   }
  //   return e
  // }

  onSearch() {
    var query = this.query.nativeElement.value
    var field = this.field.nativeElement.value
    this.getSearchData(query, field)
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected == numRows
  }

  /** Selects all rows if they are not all selected otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: any) => this.selection.select(row))
  }
}


 //ngOnInit(): void {
    // console.log
    // this.http.get('./assets/mock_data2.JSON')
    //   .map(res => res.json())
    //   .map(body => body.data || {})
    //   .subscribe(data => {
    //     this.data = data;
    //     console.log(data)
    //     this.dtTrigger.next();
    // });

   // this.dtOptions = {
      // ajax: './assets/mock_data2.JSON',
      // columns: [{
      //   title: 'ID',
      //   data: 'id'
      // }, {
      //   title: 'First name',
      //   data: 'firstName'
      // }, {
      //   title: 'Last name',
      //   data: 'lastName'
      // }],
      // Use this attribute to enable the responsive extension
      // responsive: true

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
     // };



    // this.dataTable = {
    //   headerRow: this.fields,
    //   footerRow: this.fields,
    //   dataRows: this.data
    // };
  //}