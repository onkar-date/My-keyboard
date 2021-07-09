import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { LaptopComponent } from './laptop/laptop.component';
import { BottomPartComponent } from './laptop/bottom-part/bottom-part.component';
import { MidPartComponent } from './laptop/mid-part/mid-part.component';
import { TopPartComponent } from './laptop/top-part/top-part.component';


@NgModule({
  declarations: [KeyboardComponent, TopPartComponent, MidPartComponent, BottomPartComponent, LaptopComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
