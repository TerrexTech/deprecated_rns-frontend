import { Component, Input, EventEmitter, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router'
import { LoadInventoryJsonService } from "../../services/load-inventory-json/load-inventory-json.service";
import swal from "sweetalert";

@Component({
  selector: 'dialog-data-dialog',
  templateUrl: 'dialog-data-dialog.html',
})
export class DialogDataDialog implements OnInit {
  form: FormGroup
  formSubmitAttempt: boolean
  curField: any
  returnUrl: string
  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private loadInv: LoadInventoryJsonService, private route: ActivatedRoute,
  private router: Router) {
  }

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
    this.curField = this.data
    console.log(this.curField.data)
  }

  f() { return this.form.controls }

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
    this.formSubmitAttempt = true
    const origDate = this.form.value.date_arrived
    this.form.value.date_arrived = Math.floor(Date.parse(`${origDate.year}/${month[origDate.month]}/${origDate.day}`) / 1000)
    console.log("submitted");
     this.loadInv.updateRow(this.form.value)
    // this.loadInv.getJSON();
    // alert('Your Inventory has been updated.')
    // $('#myModal').modal('hide')
    swal("Record successfully inserted!");
  }
}
}