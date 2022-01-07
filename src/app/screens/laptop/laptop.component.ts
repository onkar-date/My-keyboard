import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styles: [
  ]
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.startLaptop();
    }, 1000);
  }

  startLaptop(): void {
    document.getElementById('powerBtn').click();
  }

}
