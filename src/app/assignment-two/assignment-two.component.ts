import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
  togglePara = false
  logger=[]
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.logger.push(new Date().toTimeString())
    this.togglePara = !this.togglePara
  }

}
