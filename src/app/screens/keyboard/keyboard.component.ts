import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styles: [
  ]
})
export class KeyboardComponent implements OnInit {

  @Input() displaySeperate = true;
  constructor() { }

  ngOnInit(): void {
  }

}
