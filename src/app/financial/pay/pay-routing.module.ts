import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PayComponent} from './pay.component';

const routes: Routes = [

  {
    path: 'VP00002W.3953',
    component: PayComponent,
    data: {keyNo: 3953, pgType: 'M', pgName: 'VP00002W', url: '/acctmvc/VP00002W/Index'}
  },
  {
    path: 'VP03003W.4335',
    component: PayComponent,
    data: {keyNo: 4335, pgType: 'M', pgName: 'VP03003W', url: '/acctmvc/VP03003W/Index'}
  },
  {
    path: 'VP03006W.4973',
    component: PayComponent,
    data: {keyNo: 4973, pgType: 'M', pgName: 'VP03006W', url: '/acctmvc/VP03006W/Index'}
  },
  {
    path: 'VP03075W.4334',
    component: PayComponent,
    data: {keyNo: 4334, pgType: 'M', pgName: 'VP03075W', url: '/acctmvc/VP03075W/Index'}
  },
  {
    path: 'VP11040W.408',
    component: PayComponent,
    data: {keyNo: 408, pgType: 'M', pgName: 'VP11040W', url: '/acctmvc/VP11040W/Index'}
  },
  {
    path: 'VP21090W.2093',
    component: PayComponent,
    data: {keyNo: 2093, pgType: 'W', pgName: 'VP21090W', url: '/acctapp/Src/PAY/VP21090W/Main.aspx'}
  },
  {
    path: 'VP21100W.3854',
    component: PayComponent,
    data: {keyNo: 3854, pgType: 'M', pgName: 'VP21100W', url: '/acctmvc/VP21100W/Index'}
  },
  {
    path: 'VP31020W.421',
    component: PayComponent,
    data: {keyNo: 421, pgType: 'W', pgName: 'VP31020W', url: '/acctapp/Src/AP/VP31020W/Main.aspx'}
  },
  {
    path: 'VP31080W.427',
    component: PayComponent,
    data: {keyNo: 427, pgType: 'W', pgName: 'VP31080W', url: '/acctapp/Src/AP/VP31080W/Main.aspx'}
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class PayRoutingModule {
}
