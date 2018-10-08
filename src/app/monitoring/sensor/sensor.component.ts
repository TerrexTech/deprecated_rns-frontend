import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  row: number[] = [1,2,3,4]
  count: number[] = [1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
