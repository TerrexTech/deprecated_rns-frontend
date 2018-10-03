import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'component-manage-user-main',
  templateUrl: './manage-user-main.component.html',
  styleUrls: ['./manage-user-main.component.css']
})
export class ManageUserMainComponent implements OnInit {

  selectedTabIndices = {
    view: 0,
    add: 1,
    update: 2
  }
  selectedTabIndex = this.selectedTabIndices.view

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const authAction = this.route.snapshot.queryParams['action']
    this.selectedTabIndex = this.selectedTabIndices[authAction]
  }

}
