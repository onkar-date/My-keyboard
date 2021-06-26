import { Component, OnInit } from '@angular/core';
import { LeftPart, RightPart, NumpadRightKeys } from 'src/app/shared/constants/keys.constants';

@Component({
  selector: 'app-mid-part',
  templateUrl: './mid-part.component.html',
  styles: [
  ]
})
export class MidPartComponent implements OnInit {

  keyboardKeysLeft = LeftPart;
  keyboardKeysRight = RightPart;
  numpadRightKeys = NumpadRightKeys;
  constructor() { }

  ngOnInit(): void {
  }

}
