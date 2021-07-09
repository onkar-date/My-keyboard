import { SocialMedia } from './../../../shared/constants/social.constant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  socialMedia = SocialMedia;
  ngOnInit(): void {
  }

  showKeyboard() {
    this.router.navigate(['../keyboard'], { relativeTo: this.activatedRoute });
  }

}
