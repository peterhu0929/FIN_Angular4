import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvoComponent} from './invo.component';

const routes: Routes = [

  {
    path: 'IV11010W.434',
    component: InvoComponent,
    data: {keyNo: 434, pgType: 'M', pgName: 'IV11010W', url: '/acctmvc/IV11010W/Index'}
  },
  {
    path: 'IV11020W.435',
    component: InvoComponent,
    data: {keyNo: 435, pgType: 'M', pgName: 'IV11020W', url: '/acctmvc/IV11020W/Index'}
  },
  {
    path: 'IV11030W.436',
    component: InvoComponent,
    data: {keyNo: 436, pgType: 'M', pgName: 'IV11030W', url: '/acctmvc/IV11030W/Index'}
  },
  {
    path: 'IV11035W.4314',
    component: InvoComponent,
    data: {keyNo: 4314, pgType: 'M', pgName: 'IV11035W', url: '/acctmvc/IV11035W/Index'}
  },
  {
    path: 'IV11040W.437',
    component: InvoComponent,
    data: {keyNo: 437, pgType: 'M', pgName: 'IV11040W', url: '/acctmvc/IV11040W/Index'}
  },
  {
    path: 'IV11050W.438',
    component: InvoComponent,
    data: {keyNo: 438, pgType: 'M', pgName: 'IV11050W', url: '/acctmvc/IV11050W/Index'}
  },
  {
    path: 'IV11060W.439',
    component: InvoComponent,
    data: {keyNo: 439, pgType: 'M', pgName: 'IV11060W', url: '/acctmvc/IV11060W/Index'}
  },
  {
    path: 'IV11070W.440',
    component: InvoComponent,
    data: {keyNo: 440, pgType: 'M', pgName: 'IV11070W', url: '/acctmvc/IV11070W/Index'}
  },
  {
    path: 'IV11080W.441',
    component: InvoComponent,
    data: {keyNo: 441, pgType: 'M', pgName: 'IV11080W', url: '/acctmvc/IV11080W/Index'}
  },
  {
    path: 'IV21010W.4933',
    component: InvoComponent,
    data: {keyNo: 4933, pgType: 'M', pgName: 'IV21010W', url: '/acctmvc/IV21010W/Index'}
  },
  {
    path: 'IV21050W.4313',
    component: InvoComponent,
    data: {keyNo: 4313, pgType: 'M', pgName: 'IV21050W', url: '/acctmvc/IV21050W/Index'}
  },
  {
    path: 'IV21060W.449',
    component: InvoComponent,
    data: {keyNo: 449, pgType: 'M', pgName: 'IV21060W', url: '/acctmvc/IV21060W/Index'}
  },
  {
    path: 'IV21070W.2614',
    component: InvoComponent,
    data: {keyNo: 2614, pgType: 'M', pgName: 'IV21070W', url: '/acctmvc/IV21070W/Index'}
  },
  {
    path: 'IV21080W.4616',
    component: InvoComponent,
    data: {keyNo: 4616, pgType: 'M', pgName: 'IV21080W', url: '/acctmvc/IV21080W/Index'}
  },
  {
    path: 'IV21085W.4613',
    component: InvoComponent,
    data: {keyNo: 4613, pgType: 'M', pgName: 'IV21085W', url: '/acctmvc/IV21085W/Index'}
  },
  {
    path: 'IV21090W.4173',
    component: InvoComponent,
    data: {keyNo: 4173, pgType: 'M', pgName: 'IV21090W', url: '/acctmvc/IV21090W/Index'}
  },
  {
    path: 'IV21100W.4833',
    component: InvoComponent,
    data: {keyNo: 4833, pgType: 'M', pgName: 'IV21100W', url: '/acctmvc/IV21100W/Index'}
  },
  {
    path: 'IV41010W.451',
    component: InvoComponent,
    data: {keyNo: 451, pgType: 'M', pgName: 'IV41010W', url: '/acctmvc/IV41010W/Index'}
  },
  {
    path: 'IV41020W.452',
    component: InvoComponent,
    data: {keyNo: 452, pgType: 'M', pgName: 'IV41020W', url: '/acctmvc/IV41020W/Index'}
  },
  {
    path: 'IV41030W.453',
    component: InvoComponent,
    data: {keyNo: 453, pgType: 'M', pgName: 'IV41030W', url: '/acctmvc/IV41030W/Index'}
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class InvoRoutingModule {
}
