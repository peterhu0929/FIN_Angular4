import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashComponent } from './cash.component';

const routes: Routes = [

  { path: 'CM11010W.3833', component: CashComponent, data: { keyNo: 3833, pgType: 'M', pgName: 'CM11010W', url: '/acctmvc/CM11010W/Index' } },
  { path: 'CM11010W.3773', component: CashComponent, data: { keyNo: 3773, pgType: 'M', pgName: 'CM11010W', url: '/acctmvc/CM11010W/Index' } },
  { path: 'CM11012W.3894', component: CashComponent, data: { keyNo: 3894, pgType: 'M', pgName: 'CM11012W', url: '/acctmvc/CM11012W/Index' } },
  { path: 'CM11013W.5138', component: CashComponent, data: { keyNo: 5138, pgType: 'M', pgName: 'CM11013W', url: '/acctmvc/CM11013W/Index' } },
  { path: 'CM11030W.2013', component: CashComponent, data: { keyNo: 2013, pgType: 'W', pgName: 'CM11030W', url: '/acctapp/Src/CASH/CM11030W/Main.aspx' } },
  { path: 'CM11040W.21', component: CashComponent, data: { keyNo: 21, pgType: 'M', pgName: 'CM11040W', url: '/acctmvc/CM11040W/Index' } },
  { path: 'CM31030W.24', component: CashComponent, data: { keyNo: 24, pgType: 'W', pgName: 'CM31030W', url: '/acctapp/Src/CASH/CM31030W/Main.aspx' } },
  { path: 'CM32060W.3213', component: CashComponent, data: { keyNo: 3213, pgType: 'M', pgName: 'CM32060W', url: '/acctmvc/CM32060W/Index' } },
  { path: 'CM41040W.1223', component: CashComponent, data: { keyNo: 1223, pgType: 'W', pgName: 'CM41040W', url: '/acctapp/Src/CASH/CM41040W/Main.aspx' } },
  { path: 'CM51010W.608', component: CashComponent, data: { keyNo: 608, pgType: 'W', pgName: 'CM51010W', url: '/acctapp/Src/CASH/CM51010W/Main.aspx' } },
  { path: 'CM51060W.1197', component: CashComponent, data: { keyNo: 1197, pgType: 'W', pgName: 'CM51060W', url: '/acctapp/Src/CASH/CM51060W/Main.aspx' } },
  { path: 'CM92035W.4093', component: CashComponent, data: { keyNo: 4093, pgType: 'M', pgName: 'CM92035W', url: '/acctmvc/CM92035W/Index' } },
  { path: 'CM92060W.4333', component: CashComponent, data: { keyNo: 4333, pgType: 'M', pgName: 'CM92060W', url: '/acctmvc/CM92060W/Index' } },
  { path: 'CM92100W.2134', component: CashComponent, data: { keyNo: 2134, pgType: 'W', pgName: 'CM92100W', url: '/acctapp/Src/CASH/CM92100W/Main.aspx' } },
  { path: 'CM92100W.4353', component: CashComponent, data: { keyNo: 4353, pgType: 'M', pgName: 'CM92100W', url: '/acctmvc/CM92100W/Index' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class CashRoutingModule {
}
