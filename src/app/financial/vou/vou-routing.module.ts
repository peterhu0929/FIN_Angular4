import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VouComponent } from './vou.component';

const routes: Routes = [
  { path: 'VU21020W.2313', component: VouComponent, data: { keyNo: 2313, pgType: 'W', pgName: 'VU21020W', url: '/acctapp/Src/VOU/VU21020W/Main.aspx' } },
  { path: 'VU21070W.2673', component: VouComponent, data: { keyNo: 2673, pgType: 'W', pgName: 'VU21070W', url: '/acctapp/Src/VOU/VU21070W/Main.aspx' } },
  { path: 'VU21080W.1795', component: VouComponent, data: { keyNo: 1795, pgType: 'W', pgName: 'VU21080W', url: '/acctapp/Src/VOU/VU21080W/Main.aspx' } },
  { path: 'VU21090W.2173', component: VouComponent, data: { keyNo: 2173, pgType: 'W', pgName: 'VU21090W', url: '/acctapp/Src/VOU/VU21090W/Main.aspx' } },
  { path: 'VU31010W.305', component: VouComponent, data: { keyNo: 305, pgType: 'W', pgName: 'VU31010W', url: '/acctapp/Src/VOU/VU31010W/Main.aspx' } },
  { path: 'VU31020W.2035', component: VouComponent, data: { keyNo: 2035, pgType: 'W', pgName: 'VU31020W', url: '/acctapp/Src/VOU/VU31020W/Main.aspx' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class VouRoutingModule {
}
