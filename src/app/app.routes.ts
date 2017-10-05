import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './financial/login/login.component';
import { AuthGuard } from './_guard/authguard';
import { FinancialComponent } from './financial/financial.component';
import { MainComponent } from './financial/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'financial', component: FinancialComponent, canActivate: [AuthGuard]
  },
  {
    path: 'main/:moduleId', component: MainComponent, canActivate: [AuthGuard], children: [
    { path: 'invo', loadChildren: './financial/invo/invo.module#InvoModule' },
    { path: 'asset', loadChildren: './financial/asset/asset.module#AssetModule' },
    { path: 'gl', loadChildren: './financial/gl/gl.module#GlModule' },
    { path: 'ar', loadChildren: './financial/ar/ar.module#ArModule' },
    { path: 'hr', loadChildren: './financial/hr/hr.module#HrModule' },
    { path: 'sga', loadChildren: './financial/sga/sga.module#SgaModule' },
    { path: 'setup', loadChildren: './financial/setup/setup.module#SetupModule' },
    { path: 'ap', loadChildren: './financial/pay/pay.module#PayModule' },
    { path: 'cash', loadChildren: './financial/cash/cash.module#CashModule' },
    { path: 'vou', loadChildren: './financial/vou/vou.module#VouModule' }
    ]
  }
];


export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes,
  { enableTracing: false, useHash: true });
