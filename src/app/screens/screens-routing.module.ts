import { KeyboardComponent } from './keyboard/keyboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'keyboard',
    component: KeyboardComponent
  },
  {
    path: '**',
    redirectTo: 'keyboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
