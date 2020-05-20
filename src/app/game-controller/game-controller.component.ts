import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  interval: number = 0;
  startInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.startInterval = setInterval(() => {
      this.interval++
    }, 1000)
  }

  pauseGame() {
    clearInterval(this.startInterval)
  }

}
