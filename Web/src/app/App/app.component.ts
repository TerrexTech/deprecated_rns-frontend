import { Component } from '@angular/core'

@Component({
  selector: 'component-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppContainer {
  public isCollapsed = true

 toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed
  }
}
