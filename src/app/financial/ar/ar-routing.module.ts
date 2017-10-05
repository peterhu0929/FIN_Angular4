import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArComponent} from './ar.component';

const routes: Routes = [

  {
    path: 'AR01020W.3813',
    component: ArComponent,
    data: {keyNo: 3813, pgType: 'M', pgName: 'AR01020W', url: '/acctmvc/AR01020W/Index'}
  },
  {
    path: 'AR01030W.316',
    component: ArComponent,
    data: {keyNo: 316, pgType: 'W', pgName: 'AR01030W', url: '/acctapp/Src/AR/AR01030W/Main.aspx'}
  },
  {
    path: 'AR01150W.702',
    component: ArComponent,
    data: {keyNo: 702, pgType: 'W', pgName: 'AR01150W', url: '/acctapp/Src/AR/AR01150W/Main.aspx'}
  },
  {
    path: 'AR01230W.3393',
    component: ArComponent,
    data: {keyNo: 3393, pgType: 'W', pgName: 'AR01230W', url: '/acctapp/Src/AR/AR01230W/Main.aspx'}
  },
  {
    path: 'AR01240W.3394',
    component: ArComponent,
    data: {keyNo: 3394, pgType: 'W', pgName: 'AR01240W', url: '/acctapp/Src/AR/AR01240W/Main.aspx'}
  },
  {
    path: 'AR02000W.3933',
    component: ArComponent,
    data: {keyNo: 3933, pgType: 'W', pgName: 'AR02000W', url: '/acctapp/Src/AR/AR02000W/Main.aspx'}
  },
  {
    path: 'AR02020W.327',
    component: ArComponent,
    data: {keyNo: 327, pgType: 'W', pgName: 'AR02020W', url: '/acctapp/Src/AR/AR02020W/Main.aspx'}
  },
  {
    path: 'AR02030W.812',
    component: ArComponent,
    data: {keyNo: 812, pgType: 'W', pgName: 'AR02030W', url: '/acctapp/Src/AR/AR02030W/Main.aspx'}
  },
  {
    path: 'AR02040W.3373',
    component: ArComponent,
    data: {keyNo: 3373, pgType: 'W', pgName: 'AR02040W', url: '/acctapp/Src/AR/AR02040W/Main.aspx'}
  },
  {
    path: 'AR02041W.4813',
    component: ArComponent,
    data: {keyNo: 4813, pgType: 'M', pgName: 'AR02041W', url: '/acctmvc/AR02041W/Index'}
  },
  {
    path: 'AR02050W.3553',
    component: ArComponent,
    data: {keyNo: 3553, pgType: 'W', pgName: 'AR02050W', url: '/acctapp/Src/AR/AR02050W/Main.aspx'}
  },
  {
    path: 'AR02060W.3733',
    component: ArComponent,
    data: {keyNo: 3733, pgType: 'W', pgName: 'AR02060W', url: '/acctapp/Src/AR/AR02060W/Main.aspx'}
  },
  {
    path: 'AR03040W.338',
    component: ArComponent,
    data: {keyNo: 338, pgType: 'W', pgName: 'AR03040W', url: '/acctapp/Src/AR/AR03040W/Main.aspx'}
  },
  {
    path: 'AR04030W.2633',
    component: ArComponent,
    data: {keyNo: 2633, pgType: 'W', pgName: 'AR04030W', url: '/acctapp/Src/AR/AR04030W/Main.aspx'}
  },
  {
    path: 'AR04040W.2193',
    component: ArComponent,
    data: {keyNo: 2193, pgType: 'W', pgName: 'AR04040W', url: '/acctapp/Src/AR/AR04040W/Main.aspx'}
  },
  {
    path: 'AR04070W.3253',
    component: ArComponent,
    data: {keyNo: 3253, pgType: 'W', pgName: 'AR04070W', url: '/acctapp/Src/AR/AR04070W/Main.aspx'}
  },
  {
    path: 'AR05010W.3073',
    component: ArComponent,
    data: {keyNo: 3073, pgType: 'W', pgName: 'AR05010W', url: '/acctapp/Src/AR/AR05010W/Main.aspx'}
  },
  {
    path: 'AR05040W.2333',
    component: ArComponent,
    data: {keyNo: 2333, pgType: 'W', pgName: 'AR05040W', url: '/acctapp/Src/AR/AR05040W/Main.aspx'}
  },
  {
    path: 'AR05050W.364',
    component: ArComponent,
    data: {keyNo: 364, pgType: 'W', pgName: 'AR05050W', url: '/acctapp/Src/AR/AR05050W/Main.aspx'}
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ArRoutingModule {
}
