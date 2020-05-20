import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() evenIntervalNumber: number;
  evenList = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.evenIntervalNumber % 2 === 0) {
      this.evenList.push(this.evenIntervalNumber)
    }
  }

}
