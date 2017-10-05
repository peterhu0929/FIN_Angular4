import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssetComponent} from './asset.component';

const routes: Routes = [
  {
    path: 'AS00010W.1894',
    component: AssetComponent,
    data: {keyNo: 1894, pgType: 'W', pgName: 'AS00010W', url: '/acctapp/Src/ASSET/AS00010W/Main.aspx'}
  },
  {
    path: 'AS00020W.1895',
    component: AssetComponent,
    data: {keyNo: 1895, pgType: 'W', pgName: 'AS00020W', url: '/acctapp/Src/ASSET/AS00020W/Main.aspx'}
  },
  {
    path: 'AS00050W.3233',
    component: AssetComponent,
    data: {keyNo: 3233, pgType: 'W', pgName: 'AS00050W', url: '/acctapp/Src/ASSET/AS00050W/Main.aspx'}
  },
  {
    path: 'AS00060W.3294',
    component: AssetComponent,
    data: {keyNo: 3294, pgType: 'W', pgName: 'AS00060W', url: '/acctapp/Src/ASSET/AS00060W/Main.aspx'}
  },
  {
    path: 'AS11010W.2453',
    component: AssetComponent,
    data: {keyNo: 2453, pgType: 'W', pgName: 'AS11010W', url: '/acctapp/Src/ASSET/AS11010W/Main.aspx'}
  },
  {
    path: 'AS11020W.2433',
    component: AssetComponent,
    data: {keyNo: 2433, pgType: 'W', pgName: 'AS11020W', url: '/acctapp/Src/ASSET/AS11020W/Main.aspx'}
  },
  {
    path: 'AS20010W.3534',
    component: AssetComponent,
    data: {keyNo: 3534, pgType: 'W', pgName: 'AS20010W', url: '/acctapp/Src/ASSET/AS20010W/Main.aspx'}
  },
  {
    path: 'AS20010W.3536',
    component: AssetComponent,
    data: {keyNo: 3536, pgType: 'W', pgName: 'AS20010W', url: '/acctapp/Src/ASSET/AS20010W/EvaluateReport.aspx'}
  },
  {
    path: 'AS20010W.3573',
    component: AssetComponent,
    data: {keyNo: 3573, pgType: 'W', pgName: 'AS20010W', url: '/acctapp/Src/ASSET/AS20010W/TaxReport.aspx'}
  },
  {
    path: 'AS20010W.3535',
    component: AssetComponent,
    data: {keyNo: 3535, pgType: 'W', pgName: 'AS20010W', url: '/acctapp/Src/ASSET/AS20010W/Evaluate.aspx'}
  },
  {
    path: 'AS21010W.4073',
    component: AssetComponent,
    data: {keyNo: 4073, pgType: 'W', pgName: 'AS21010W', url: '/acctapp/Src/ASSET/AS21010W/Main.aspx'}
  },
  {
    path: 'AS31010W.2373',
    component: AssetComponent,
    data: {keyNo: 2373, pgType: 'W', pgName: 'AS31010W', url: '/acctapp/Src/ASSET/AS31010W/Main.aspx'}
  },
  {
    path: 'AS41010W.4113',
    component: AssetComponent,
    data: {keyNo: 4113, pgType: 'W', pgName: 'AS41010W', url: '/acctapp/Src/ASSET/AS41010W/Main.aspx'}
  },
  {
    path: 'AS51010W.4053',
    component: AssetComponent,
    data: {keyNo: 4053, pgType: 'W', pgName: 'AS51010W', url: '/acctapp/Src/ASSET/AS51010W/Main.aspx'}
  },
  {
    path: 'AS61010W.2293',
    component: AssetComponent,
    data: {keyNo: 2293, pgType: 'W', pgName: 'AS61010W', url: '/acctapp/Src/ASSET/AS61010W/Main.aspx'}
  },
  {
    path: 'AS61011W.3613',
    component: AssetComponent,
    data: {keyNo: 3613, pgType: 'W', pgName: 'AS61011W', url: '/acctapp/Src/ASSET/AS61011W/Main.aspx'}
  },
  {
    path: 'AS62010W.2353',
    component: AssetComponent,
    data: {keyNo: 2353, pgType: 'W', pgName: 'AS62010W', url: '/acctapp/Src/ASSET/AS62010W/Main.aspx'}
  },
  {
    path: 'AS62020W.3153',
    component: AssetComponent,
    data: {keyNo: 3153, pgType: 'W', pgName: 'AS62020W', url: '/acctapp/Src/ASSET/AS62020W/Main.aspx'}
  },
  {
    path: 'AS82010W.1794',
    component: AssetComponent,
    data: {keyNo: 1794, pgType: 'W', pgName: 'AS82010W', url: '/acctapp/Src/ASSET/AS82010W/Main.aspx'}
  },
  {
    path: 'AS91010W.2553',
    component: AssetComponent,
    data: {keyNo: 2553, pgType: 'W', pgName: 'AS91010W', url: '/acctapp/Src/ASSET/AS91010W/Main.aspx'}
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AssetRoutingModule {
}
