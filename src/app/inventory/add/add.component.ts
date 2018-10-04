import { UserService } from '../../services/user.service'
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthenticationService } from '../../services'
import { LoadInventoryJsonService } from "../../services/load-inventory-json/load-inventory-json.service"
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../config'
import swal  from "sweetalert";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('date') dateSel: ElementRef
  form: FormGroup
  formSubmitAttempt: boolean
  error: string
  returnUrl: string
  loading = false
  upc: number;
  sku: number;
  id: number;
  name: string
  origin: string
  date: Date
  weight: number
  price: number
  devId: string
  location: string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private loadJsonData: LoadInventoryJsonService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      upc: ['', [Validators.required, Validators.minLength(1)]],
      sku: ['', [Validators.required, Validators.minLength(1)]],
      item_id: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      origin: ['', [Validators.required, Validators.minLength(1)]],
      date_arrived: ['', [Validators.required, Validators.minLength(1)]],
      total_weight: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
      device_id: ['', [Validators.required, Validators.minLength(1)]],
      location: ['', [Validators.required, Validators.minLength(1)]]
    })

    this.returnUrl = this.route.snapshot.queryParams[''] || '/'
  }

  generate() {
    this.http.get(environment.apiUrl + '/gen-data')
      .subscribe(data => {
        console.log(data)
        this.form.get('upc').setValue(data[0].upc);
        this.form.get('sku').setValue(data[0].sku);
        this.form.get('item_id').setValue(data[0].item_id);
        this.form.get('name').setValue(data[0].name);
        this.form.get('origin').setValue(data[0].origin);
        // this.form.get('date_arrived').setValue(new Date(data[0].date_arrived * 1000).toJSON().split("T")[0]);
        this.dateSel.nativeElement.value = new Date(data[0].date_arrived * 1000).toJSON().split("T")[0]
        this.form.get('total_weight').setValue(data[0].total_weight);
        this.form.get('price').setValue(data[0].price);
        this.form.get('device_id').setValue(data[0].device_id);
        this.form.get('location').setValue(data[0].location);
      })
  }

  onSubmit() {
    this.formSubmitAttempt = true
    if (this.form.valid) {
      const month = new Array()
      month[0] = "January"
      month[1] = "February"
      month[2] = "March"
      month[3] = "April"
      month[4] = "May"
      month[5] = "June"
      month[6] = "July"
      month[7] = "August"
      month[8] = "September"
      month[9] = "October"
      month[10] = "November"
      month[11] = "December"
      const origDate = this.form.value.date_arrived
      this.form.value.date_arrived = Math.floor(Date.parse(`${origDate.year}/${month[origDate.month]}/${origDate.day}`) / 1000)
      swal("Record successfully inserted!");
      this.reset()
    }
  }

  reset() {
    this.form.reset()
    this.formSubmitAttempt = false
  }

  isFieldValid(field: string) {
    return this.formSubmitAttempt && this.form.controls[field].status == 'INVALID'
  }
}
