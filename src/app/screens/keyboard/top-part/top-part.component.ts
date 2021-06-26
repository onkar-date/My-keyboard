import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styles: [
  ]
})
export class TopPartComponent implements OnInit {

  constructor() { }
  powerOn = false;
  ngOnInit(): void {
  }

  async toggle(): Promise<void> {
    const powerBtn = document.getElementById('powerBtn');
    powerBtn.classList.toggle('on');
    const keyBtns = document.getElementsByClassName('key');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < keyBtns.length; i++) {
      setTimeout(() => {
        keyBtns[i].classList.toggle('on');
      }, 1.5 * i);
    }
    this.powerOn = !this.powerOn;
  }
}
