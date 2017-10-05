import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupComponent} from './setup.component';

const routes: Routes = [
  {
    path: 'DD00001W.3883',
    component: SetupComponent,
    data: {keyNo: 3883, pgType: 'M', pgName: 'DD00001W', url: '/acctmvc/DD00001W/Index'}
  },
  {
    path: 'DD00002W.4413',
    component: SetupComponent,
    data: {keyNo: 4413, pgType: 'M', pgName: 'DD00002W', url: '/acctmvc/DD00002W/Index'}
  },
  {
    path: 'DD00003W.4433',
    component: SetupComponent,
    data: {keyNo: 4433, pgType: 'M', pgName: 'DD00003W', url: '/acctmvc/DD00003W/Index'}
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class SetupRoutingModule {
}
