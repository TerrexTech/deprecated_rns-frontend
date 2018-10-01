import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  @ViewChild("full_page") page : HTMLElement
  @ViewChild("toggle") toggle: HTMLElement
  focus;
  focus1;
  focus2;
  test: Date = new Date();
  private sidebarVisible: boolean;


  constructor(private element: ElementRef) {
    this.sidebarVisible = false;
  }
  checkFullPageBackgroundImage() {
    var image_src = this.page.innerHTML

    if (image_src !== undefined) {
      var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      this.page.insertAdjacentHTML('beforeend',image_container);
    }
  };

  ngOnInit() {
    this.checkFullPageBackgroundImage();
    // this.toggle = this.toggle.getElementsByClassName('')

    console.log(this.toggle)
    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700)
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
  }
  sidebarToggle() {
    var toggleButton = this.toggle;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggle.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
