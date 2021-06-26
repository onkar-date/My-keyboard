import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { TopPartComponent } from './keyboard/top-part/top-part.component';
import { MidPartComponent } from './keyboard/mid-part/mid-part.component';
import { BottomPartComponent } from './keyboard/bottom-part/bottom-part.component';


@NgModule({
  declarations: [KeyboardComponent, TopPartComponent, MidPartComponent, BottomPartComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
