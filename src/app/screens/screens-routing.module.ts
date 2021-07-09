import { LaptopComponent } from './laptop/laptop.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'laptop',
    component: LaptopComponent
  },
  {
    path: 'keyboard',
    component: KeyboardComponent
  },
  {
    path: '**',
    redirectTo: 'laptop'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
