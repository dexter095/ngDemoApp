import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, SimpleChange, SimpleChanges } from '@angular/core';

import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-in-active-users',
  templateUrl: './in-active-users.component.html',
  styleUrls: ['./in-active-users.component.css']
})

export class InActiveUsersComponent implements OnInit {
  // @Input() usersList: [{ name: string, status: string }]
  // @Output() changeInActiveUserStatus = new EventEmitter<{ name: string, status: string }>()
  inActiveUsers = []
  constructor(private usersService: UsersService) { }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("In active users", changes)    
  //   this.inActiveUsers = []
  //   this.usersService.users.map((item) => {
  //     if (item.status === "InActive") {
  //       this.inActiveUsers.push(item)
  //     }
  //   })
  // }

  ngDoCheck() {
    console.log("In active users")
    this.inActiveUsers = []
    this.usersService.users.map((item) => {
      if (item.status === "InActive") {
        this.inActiveUsers.push(item)
      }
    })
  }

  ngOnInit(): void {
    console.log("In active users")
    this.inActiveUsers = []
    this.usersService.users.map((item) => {
      if (item.status === "InActive") {
        this.inActiveUsers.push(item)
      }
    })
  }

  moveToActive(item) {
    let cloneItem = { ...item }
    this.usersService.changeUserStatus(cloneItem)
  }

}
