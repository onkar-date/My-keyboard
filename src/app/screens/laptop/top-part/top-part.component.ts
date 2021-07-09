import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styles: [
  ]
})
export class TopPartComponent implements OnInit {
  powerOn = false;
  canToggle = true;
  constructor() { }
  ngOnInit(): void {
  }

  toggle() {
    if (this.canToggle) { // to wait for power on animation to finish
      this.powerOn = !this.powerOn;
      const powerBtn = document.getElementById('powerBtn');
      powerBtn.classList.toggle('on');
      this.toggleKeys();
      this.toggleLogoAndWallpaper();
    }
  }

  toggleKeys() {
    const keyBtns = document.getElementsByClassName('key');
    for (let i = 0; i < keyBtns.length; i++) {
      setTimeout(() => {
        keyBtns[i].classList.toggle('on');
      }, 1.5 * i);
    }
  }

  toggleLogoAndWallpaper() {
    const hpLogo = document.getElementsByClassName('hp-logo');
    if (this.powerOn) {
      hpLogo[0]?.classList?.toggle('on');
      this.canToggle = false;
      setTimeout(() => {
        hpLogo[0]?.classList?.toggle('on');
        this.toggleWallpaper();
      }, 1500)
    } else {
      this.toggleWallpaper();
    }
    
  }

  toggleWallpaper() {
    const wallpaper = document.getElementsByClassName('wallpaper');
    wallpaper[0]?.classList?.toggle('on');
    this.canToggle = true;
  }

}
