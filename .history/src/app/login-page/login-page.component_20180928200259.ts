import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  @ViewChild('full_page') page : HTMLElement
  @ViewChild('toggle') toggle: HTMLElement
  test: Date = new Date()
  private sidebarVisible: boolean


  constructor(private element: ElementRef) {
    this.sidebarVisible = false
  }

  ngOnInit() {

    console.log(this.toggle)
    setTimeout(() => {
      // after 1000 ms we add the class animated to the login/register card
      // $('.card').removeClass('card-hidden')
    }, 700)
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0]
    body.classList.remove('login-page')
  }
  sidebarToggle() {
    var toggleButton = this.toggle
    var body = document.getElementsByTagName('body')[0]
    var sidebar = document.getElementsByClassName('navbar-collapse')[0]
    if (this.sidebarVisible == false) {
      setTimeout(() => {
        toggleButton.classList.add('toggled')
      }, 500)
      body.classList.add('nav-open')
      this.sidebarVisible = true
    } else {
      this.toggle.classList.remove('toggled')
      this.sidebarVisible = false
      body.classList.remove('nav-open')
    }
  }
}
