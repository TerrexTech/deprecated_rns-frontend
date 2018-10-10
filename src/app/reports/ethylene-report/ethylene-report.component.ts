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

  constructor(private http: HttpClient) { }

  ngOnInit() {
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

    let resource = `{
        login(start_date:"${sendDate.start_date}",end_date:"${sendDate.end_date}")
        {

        }
      }`

    console.log(this.http)
    this.http.post('http://162.212.158.16:30653/api', resource)
      .toPromise()
      // .then(d => this.data)
      .then((data: any) => {
        console.log(data.data.login)
        if (data.data.login !== null) {

        }
        // else {
        //   this.showError = true
        // }
      })

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
