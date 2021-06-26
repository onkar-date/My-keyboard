import { SocialMedia } from './../../../shared/constants/social.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }
  socialMedia = SocialMedia;
  ngOnInit(): void {
  }

}
