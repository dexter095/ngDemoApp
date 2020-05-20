import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';

import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, DoCheck {
  // @Input() usersList: [{ name: string, status: string }]
  // @Output() changeActiveUserStatus = new EventEmitter<{ name: string, status: string }>()
  activeUsers = []
  constructor(private userService: UsersService) { }

  // ngOnChanges() {
  //   console.log("Active user")
  //   this.activeUsers = []
  //   this.userService.users.map((item) => {
  //     if (item.status === "Active") {
  //       this.activeUsers.push(item)
  //     }
  //   })
  // }

  ngDoCheck() {
    console.log("Active user", this.userService.users)
    this.activeUsers = []
    this.userService.users.map((item) => {
      if (item.status === "Active") {
        this.activeUsers.push(item)
      }
    })
  }

  ngOnInit(): void {
    console.log("Active user", this.userService.users)
    this.activeUsers = []
    this.userService.users.map((item) => {
      if (item.status === "Active") {
        this.activeUsers.push(item)
      }
    })
  }

  moveToInactive(item) {
    let cloneItem = { ...item }
    this.userService.changeUserStatus(cloneItem)
  }

}
