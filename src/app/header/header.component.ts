import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setSelectedLink = new EventEmitter<{name: string}>()
  constructor() { }

  ngOnInit(): void {
  }

  onLinkSelection(eventData) {
    this.setSelectedLink.emit(eventData.target.text.trim())
  }

}
