import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Oil10Component} from './oil10.component';

const routes: Routes = [
  {
    path: 'OC11080W',
    component: Oil10Component,
    data: {pgName: 'OC11080W' }
  },
  {
    path: 'OC11080W',
    component: Oil10Component,
    data: {pgName: 'OC11080W' }
  },
  {
    path: 'OC21030W',
    component: Oil10Component,
    data: {pgName: 'OC21030W' }
  },
  {
    path: 'OC21050W',
    component: Oil10Component,
    data: {pgName: 'OC21050W' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class Oil10RoutingModule { }
