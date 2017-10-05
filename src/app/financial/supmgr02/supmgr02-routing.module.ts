import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Supmgr02Component} from './supmgr02.component';

const routes: Routes = [
  {
    path: 'IV21010W',
    component: Supmgr02Component,
    data: {pgName: 'IV21010W'},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class Supmgr02RoutingModule { }
