import { UserService } from '../../services/user.service'
import { Component, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { AuthenticationService } from '../../services'
import { LoadInventoryJsonService } from "../../services/load-inventory-json/load-inventory-json.service"
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

// export interface Inventory {
//   item_id: number
//   item_name: string
//   status: string
//   product_origin: string
//   arrival_date: Date
//   expiry_date: Date
//   total_weight: number
//   price: number
//   monitored_by: string
//   location: string
// }

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup
  formSubmitAttempt: boolean
  error: string
  returnUrl: string
  loading = false
  upc:number;
  sku:number;
  id: number;
  name:string
  origin:string
  date:Date
  weight:number
  price:number
  devId:string
  location:string

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private loadJsonData: LoadInventoryJsonService
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

  // convenience getter for easy access to form fields
f(): any {
    return this.form.controls
  }

 generate()
  {
    this.form.get('upc').setValue(5);
    this.form.get('sku').setValue(4);
    this.form.get('item_id').setValue(10);
    this.form.get('name').setValue('Banana');
    this.form.get('origin').setValue('Canada');
    this.form.get('date_arrived').setValue(new Date());
    this.form.get('total_weight').setValue(10);
    this.form.get('price').setValue(11);
    this.form.get('device_id').setValue("31");
    this.form.get('location').setValue("Aisle 1");
  }

  onSubmit() {
    this.formSubmitAttempt = true
    if (this.form.valid){
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
       console.log(JSON.stringify(this.form.value))
       swal("Record successfully inserted!");
        this.reset()
    }
  }

  reset() {
    this.form.reset()
    this.formSubmitAttempt = false
  }

  // showMessage(type: string) {
  //   if (type === 'success-message') {
  //     swal({
  //         title: 'Success',
  //         text: 'Product added',
  //         buttonsStyling: false,
  //         confirmButtonClass: 'btn btn-success',
  //         type: 'success'
  //     }).catch(swal.noop)

  // }
  // }

}