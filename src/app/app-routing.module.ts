import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConverterComponent} from './views/converter/converter.component';

const routes: Routes = [
  {
    path: '', component: ConverterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
