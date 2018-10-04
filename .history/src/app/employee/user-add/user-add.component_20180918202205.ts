import { Component, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { UserService } from './../../../Services/auth/user.service'

@Component({
  selector: 'component-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  title = 'Manage Users: Add New Employee'

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20)
  ])

  passwordFormControl = new FormControl('', [
    Validators.required
  ])

  roleFormControl = new FormControl('', [
    Validators.required
  ])

  isPasswordInputVisible = false
  loginModel = {
    username: '',
    password: ''
  }

  isRegistrationFailed = false

  constructor(
    // @Inject(UserService)
    // private userService: UserService,
    // private modalService: NgbModal
  ) {}

  // open(popupTitle: string, content: string, buttons: string[]): void {
  //   const modalRef = this.modalService.open(ModalDialogboxComponent)
  //   modalRef.componentInstance.model = {
  //     title: popupTitle.valueOf(),
  //     content: content.valueOf(),
  //     buttons: buttons.values()
  //   }
  }

  // async addUser(): Promise<boolean> {
  //   this.isRegistrationFailed = !await this.userService
  //                                       .register(this.loginModel)

  //   const dialogTitle = this.isRegistrationFailed
  //                       ? 'Error registering Employee'
  //                       : 'Employee successfully registered'

  //   this.open(
  //     dialogTitle,
  //     `${this.loginModel.username} has been registered successfully.`,
  //     ['OK']
  //   )

  //   return !this.isRegistrationFailed
  // }

