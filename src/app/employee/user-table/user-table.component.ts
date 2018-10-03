import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'component-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns = ['username', 'name', 'accountType']
  ELEMENT_DATA: Element[] = [
    {
      username: 'danny.santhos', name: 'Danny Santhos', accountType: 'Corporate'
    },
    {
      username: 'kevin.timmins', name: 'Kevin Timmins', accountType: 'Corporate'
    },
    {
      username: 'keylly74', name: 'Kelly River', accountType: 'Employee'
    },
    {
      username: 'josh.s', name: 'Josh Stones', accountType: 'Employee'
    },
    {
      username: 'some.dude', name: 'Some Dude', accountType: 'Employee'
    },
    {
      username: 'martha.smith', name: 'Martha Smith', accountType: 'Manager'
    }
  ]
  dataSource = new MatTableDataSource(this.ELEMENT_DATA)
  title = 'Manage Employees'

  @ViewChild(MatSort) sort: MatSort

  ngOnInit(): void {
    this.dataSource.sort = this.sort
  }
}
export interface Element {
  username: String
  name: String
  accountType: String
}
