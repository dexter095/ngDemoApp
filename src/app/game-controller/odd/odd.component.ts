import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() oddIntervalNumber: number;
  oddList = []
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.oddIntervalNumber % 2 != 0) {
      this.oddList.push(this.oddIntervalNumber)
    }
  }

}
