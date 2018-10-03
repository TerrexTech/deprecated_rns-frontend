import { Component, Inject } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { UserService } from '../../services/user.service'

@Component({
  selector: 'component-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
    title = 'Manage Users: Update Employee'

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
      @Inject(UserService)
      private userService: UserService,
      private modalService: NgbModal
    ) {}

    open(popupTitle: string, content: string, buttons: string[]): void {
      // const modalRef = this.modalService.open(ModalDialogboxComponent)
      // modalRef.componentInstance.model = {
      //   title: popupTitle.valueOf(),
      //   content: content.valueOf(),
      //   buttons: buttons.values()
      // }
    }

    async addUser(): Promise<boolean> {
      // this.isRegistrationFailed = !await this.userService
      //                                     .register(this.loginModel)

      const dialogTitle = this.isRegistrationFailed
                          ? 'Error Updating Employee'
                          : 'Employee successfully updated'

      this.open(
        dialogTitle,
        `${this.loginModel.username} has been successfully updated.`,
        ['OK']
      )

      return !this.isRegistrationFailed
    }
}
