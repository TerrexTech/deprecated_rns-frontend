import { Component, OnInit, ViewChild, Input, ElementRef, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
// import { Observable } from 'rxjs/Observable'
import { LoadInventoryJsonService } from '../../services/load-inventory-json/load-inventory-json.service'
import { Inventory } from "../../models/inventory"
import { Query } from "../../models/query"
import { SelectionModel } from '@angular/cdk/collections'
import { HttpClient, HttpHeaderResponse } from '@angular/common/http'
import { environment } from '../../../config'
import { DialogDataDialog } from "../dialog-data/dialog-data.component";
import swal from "sweetalert";


var Food: Inventory[] = []
const initialSelection = []
const allowMultiSelect = true

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  food: Inventory
  displayedColumns: string[] = ['select','name', 'origin' ,'location', 'date_arrived', 'expiry_date', 'sale_price', 'total_weight', 'modify']
  dataSource = new MatTableDataSource()
  today: number = Date.now()
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  @ViewChild("query") query: ElementRef
  @ViewChild("field") field: ElementRef
  @ViewChild("formDate") formDate : ElementRef

  selection = new SelectionModel<Inventory>(true, [])

  constructor(private http: Http, private loadInventoryJsonService: LoadInventoryJsonService, public dialog: MatDialog) {
  }

  openDialog() {

  }

  ngOnInit(): void{
    this.loadInventoryJsonService.getJsonTest()
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

  resetData(){
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
            console.log(index)
            console.log(item.item_id)

            console.log("++++++++++++++++++==")
            // this.loadInventoryJsonService.deleteRow(item.item_id)
            //   .subscribe(console.log)
            // this.dataSource.data.splice(index, 1)

            // this.dataSource = new MatTableDataSource<Inventory>(Food)
          })
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Inventory not removed");
        }
      });

    // this.selection.selected.forEach(item => {
    //   let index: number = Food.findIndex(d => d === item)
    //   console.log(index)
    //   console.log(item.item_id)

    //   console.log("++++++++++++++++++==")
    //   // this.loadInventoryJsonService.deleteRow(item.item_id)
    //   //   .subscribe(console.log)
    //   // this.dataSource.data.splice(index, 1)

    //   // this.dataSource = new MatTableDataSource<Inventory>(Food)
    // })
    //this.selection = new SelectionModel<Inventory>(true, [])
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim()
      .toLowerCase()
  }

  onSearch() {
    var query = this.query.nativeElement.value
    var field = this.field.nativeElement.value

    this.getSearchData(query, field)

    //post
  }

  getSearchData(query, field) {
    this.loadInventoryJsonService.getSearchJSON(query, field)
      .subscribe(data => {
        console.log(data)
        this.dataSource.data = data
        Food = data
      })
  }

  curField: any

 populateFields(e): Inventory {
   console.log(e)
   if (e != null) {
     this.curField = Food.filter(i => i.item_id === e)[0]
      console.log(this.curField.item_id)
      console.log(e)
      this.dialog.open(DialogDataDialog, {
       data: {
         data: this.curField
       }
     });
    //console.log(this.curField.item_id)
    // this.formDate.nativeElement.value = this.curField.date_arrived
     }
   return e
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