import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

   onSubmit() {

      const sku = this.sku.nativeElement.value
      const name = this.name.nativeElement.value
      const start = this.start.nativeElement.value
      const end = this.end.nativeElement.value
      const unixStart = new Date(start).getTime() / 1000
      const unixEnd = new Date(end).getTime() / 1000

      if(sku == null){

      }

      const json = [{
        'sku':sku,
        'name':name,
        'unixStart':unixStart,
        'unixEnd':unixEnd
      }]
      console.log(json);
      this.http.post('http://162.212.158.16:30653/api', json)
      .toPromise()
      // swal("Record successfully inserted!");
  }

}
