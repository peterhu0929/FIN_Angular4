import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Supmgr03Component} from './supmgr03.component';

const routes: Routes = [
  {
    path: 'IV21010W',
    component: Supmgr03Component,
    data: {pgName: 'IV21010W'},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class Supmgr03RoutingModule { }
