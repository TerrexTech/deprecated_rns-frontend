import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../config'
import { SendDate } from '../../models'
import Chart from 'chart.js'

@Component({
  selector: 'app-ethylene-report',
  templateUrl: './ethylene-report.component.html',
  styleUrls: ['./ethylene-report.component.css']
})
export class EthyleneReportComponent implements OnInit {

  totalChart: any
  soldChart: any
  distChart: any
  donationChart: any
  date: any
  @ViewChild('arrival') arrival: ElementRef
  @ViewChild('total') total: ElementRef
  @ViewChild('average') average: ElementRef

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

  loadEthyleneGraph() {
    this.soldChart = new Chart('ethylene', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Ethylene',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 1)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        hover: {
          mode: 'dataset'
        },
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Period'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'PPM'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.getJSON().subscribe(dataArr => {
      console.log(dataArr);
      const metrics: any = [
        []
      ];
      // total_weight: 195, sold_weight: 58, waste_weight: 49
      Object.keys(dataArr).forEach(k => {
        const prods = dataArr[k];
        const date = new Date(prods.dates * 1000).toDateString();
        this.soldChart.data.labels.push(date);
        metrics[0].push(prods.sold_weight);
      });

      this.soldChart.data.datasets.forEach((dataset, index) =>
        dataset.data = dataset.data.concat(metrics[index])
      );
      this.soldChart.update();

      // Moving Graph
      setInterval(() => {
        this.soldChart.data.datasets.forEach((dataset, index) => {
          const metric = dataset.data.shift();
          dataset.data.push(metric + 1);
        });
        this.soldChart.update();
      }, 40000);
    });
  }

  getJSON(): any {
    var sendDates = []

    const sendDate = new SendDate()
    sendDate.end_date = this.getDays(1)[0]
    sendDate.start_date = this.getDays(1)[1]

    const sendDate2 = new SendDate();
    sendDate2.end_date = this.getDays(2)[0]
    sendDate2.start_date = this.getDays(2)[1]

    const sendDate3 = new SendDate()
    sendDate3.end_date = this.getDays(3)[0]
    sendDate3.start_date = this.getDays(3)[1]

    const sendDate4 = new SendDate()
    sendDate4.end_date = this.getDays(4)[0]
    sendDate4.start_date = this.getDays(4)[1]

    sendDates = [sendDate, sendDate2, sendDate3, sendDate4]


    return this.http.post(environment.apiUrl + '/total-inv', sendDates, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getToday(): any {
    var sendDates = []

    const sendDate = new SendDate()
    sendDate.end_date = this.getDays(1)[0]
    // sendDate.start_date = this.getDays(0)[1]
    console.log(sendDate)
    sendDates = [sendDate]


    return this.http.post(environment.apiUrl + '/total-inv', sendDates, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getDays(days?: number): Array<any> {
    let dates = []
    const end_date = Math.round((new Date().getTime() / 1000) + (86400 * days))
    const start_date = Math.round(new Date().getTime() / 1000) - (86400 * days)
    return dates = [
      end_date, start_date
    ]
  }

}
