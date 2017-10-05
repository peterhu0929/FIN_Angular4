import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HR01010WComponent } from './HR01010W/HR01010W.component';
import { HR02010WComponent } from './HR02010W/HR02010W.component';
import { HR03010WComponent } from './HR03010W/HR03010W.component';
const routes: Routes = [
  { path: 'HR01010W.5080', component: HR01010WComponent, data: { pgName: 'HR01010W' } },
  { path: 'HR02010W.5077', component: HR02010WComponent, data: { pgName: 'HR02010W' } },
  { path: 'HR03010W.5073', component: HR03010WComponent, data: { pgName: 'HR03010W' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
})
export class HrRoutingModule {
}
