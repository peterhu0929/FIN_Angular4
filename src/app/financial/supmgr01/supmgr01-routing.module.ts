import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Supmgr01Component} from './supmgr01.component';

const routes: Routes = [
  {
    path: 'IV21010W',
    component: Supmgr01Component,
    data: {pgName: 'IV21010W'},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class Supmgr01RoutingModule { }
