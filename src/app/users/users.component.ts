import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // users = [];

  constructor() { }

  ngOnInit(): void {
    // let arr = [{ 'name': 'Jam', 'status': 'Active' },
    // { 'name': 'Ross', 'status': 'InActive' },
    // { 'name': 'Andrew', 'status': 'Active' },
    // { 'name': 'Jimmy', 'status': 'Active' },
    // { 'name': 'Max', 'status': 'InActive' },
    // { 'name': 'Acadmeind', 'status': 'InActive' },
    // { 'name': 'Julia', 'status': 'Active' }]
    // arr.map((item) => {
    //   this.users.push(item)
    // })
  }

  // changeUserStatus(item) {
  //   console.log('changeUserStatus---  -', item)
  //   let arr = [...this.users]
  //   Object.values(arr).map((user) => {
  //     if (user.name === item.name) {
  //       user.status = item.status==="Active" ? "InActive" : "Active"
  //     }
  //   })
  //   this.users = [...arr]
  //   console.log('New changeUserStatus----', this.users)
  // }

}
