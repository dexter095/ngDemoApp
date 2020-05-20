import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = []

  constructor() {
    this.users.push(
      { 'name': 'Jam', 'status': 'Active' },
      { 'name': 'Ross', 'status': 'InActive' },
      { 'name': 'Andrew', 'status': 'Active' },
      { 'name': 'Jimmy', 'status': 'Active' },
      { 'name': 'Max', 'status': 'InActive' },
      { 'name': 'Acadmeind', 'status': 'InActive' },
      { 'name': 'Julia', 'status': 'Active' }
    )
  }

  changeUserStatus(item) {
    console.log('changeUserStatus---  -', item)
    let arr = [...this.users]
    Object.values(arr).map((user) => {
      if (user.name === item.name) {
        user.status = item.status === "Active" ? "InActive" : "Active"
      }
    })
    this.users = [...arr]
    console.log('New changeUserStatus----', this.users)
  }

}
