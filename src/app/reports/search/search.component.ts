import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SearchDataToTableService } from "../../services/search-data-to-table/search-data-to-table.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('sku') sku: ElementRef
  @ViewChild('name') name: ElementRef
  @ViewChild('start') start: ElementRef
  @ViewChild('end') end: ElementRef

  constructor(private http: HttpClient, private searchData: SearchDataToTableService) { }

  ngOnInit() {
  }

  onSubmit() {

      const sku = this.sku.nativeElement.value
      const name = this.name.nativeElement.value
      const start = this.start.nativeElement.value
      const end = this.end.nativeElement.value
      const unixStart = new Date(start).getTime() / 1000
      const unixEnd = new Date(end).getTime() / 1000
      let resource;

      var searchArray = {}

     if(sku != ""){
        searchArray["sku"] = sku
     }
     if (name != "") {
       searchArray["name"] = name
     }
     if (!isNaN(unixStart)) {
       searchArray["start_date"] = unixStart
     }
     if (!isNaN(unixEnd)) {
       searchArray["end_date"] = unixEnd
     }
      console.log(searchArray)
        resource = `{
        searchReport(inventory:"${searchArray}")
        {

        }
      }`

      this.searchData.setData(searchArray)

      // this.data = searchArray
      // console.log(this.data)
    //  console.log(this.http)
    //  this.http.post('http://162.212.158.16:30653/api', resource)
    //    .toPromise()
    //    // .then(d => this.data)
    //    .then((data: any) => {
    //      console.log(data.data)
    //      if (data.data !== null) {

    //      }
         // else {
         //   this.showError = true
         // }
       //})

      // const json = [{
      //   'sku':sku,
      //   'name':name,
      //   'unixStart':unixStart,
      //   'unixEnd':unixEnd
      // }]
      // console.log(json);
      // this.http.post('http://162.212.158.16:30653/api', json)
      // .toPromise()
      // swal("Record successfully inserted!");
  }
  }

