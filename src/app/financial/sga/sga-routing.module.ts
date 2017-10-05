import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SgaComponent} from './sga.component';

const routes: Routes = [

  {
    path: 'DA51030W.2813',
    component: SgaComponent,
    data: {keyNo: 2813, pgType: 'W', pgName: 'DA51030W', url: '/acctapp/Src/SGA/DA51030W/Main.aspx'}
  },
  {
    path: 'DA51050W.1134',
    component: SgaComponent,
    data: {keyNo: 1134, pgType: 'W', pgName: 'DA51050W', url: '/acctapp/Src/SGA/DA51050W/Main.aspx'}
  },
  {
    path: 'DA51090W.2273',
    component: SgaComponent,
    data: {keyNo: 2273, pgType: 'W', pgName: 'DA51090W', url: '/acctapp/Src/SGA/DA51090W/Main.aspx'}
  },
  {
    path: 'DA51100W.2753',
    component: SgaComponent,
    data: {keyNo: 2753, pgType: 'W', pgName: 'DA51100W', url: '/acctapp/Src/SGA/DA51100W/Main.aspx'}
  },
  {
    path: 'DA51110W.2754',
    component: SgaComponent,
    data: {keyNo: 2754, pgType: 'W', pgName: 'DA51110W', url: '/acctapp/Src/SGA/DA51110W/Main.aspx'}
  },
  {
    path: 'DA61020W.556',
    component: SgaComponent,
    data: {keyNo: 556, pgType: 'W', pgName: 'DA61020W', url: '/acctapp/Src/SGA/DA61020W/Main.aspx'}
  },
  {
    path: 'DA61040W.2493',
    component: SgaComponent,
    data: {keyNo: 2493, pgType: 'W', pgName: 'DA61040W', url: '/acctapp/Src/SGA/DA61040W/Main.aspx'}
  },
  {
    path: 'DA61050W.2513',
    component: SgaComponent,
    data: {keyNo: 2513, pgType: 'W', pgName: 'DA61050W', url: '/acctapp/Src/SGA/DA61050W/Main.aspx'}
  },
  {
    path: 'DA61090W.2514',
    component: SgaComponent,
    data: {keyNo: 2514, pgType: 'W', pgName: 'DA61090W', url: '/acctapp/Src/SGA/DA61090W/Main.aspx'}
  },
  {
    path: 'DA99020W.1973',
    component: SgaComponent,
    data: {keyNo: 1973, pgType: 'W', pgName: 'DA99020W', url: '/acctapp/Src/SGA/DA99020W/Main.aspx'}
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class SgaRoutingModule {
}
