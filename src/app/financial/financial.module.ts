import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from '../_directive/directive.module';
import { RouterModule } from '@angular/router';
import { FinancialComponent } from './financial.component';
import { LoginModule } from './login/login.module';
import { SessionModule } from './session/session.module';
import { CatogoryComponent } from './catogory/catogory.component';
import { AngularMaterialModule } from '../_shared/angular-material.module';
import { HttpModule } from '@angular/http';
import { CatogoryService } from './catogory/catogory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { FormsModule } from '@angular/forms';
import { ConsoleLogService } from '../_services/console-log.service';
import { InvoModule } from './invo/invo.module';
import { AssetModule } from './asset/asset.module';
import { SetupModule } from './setup/setup.module';
import { GlModule } from './gl/gl.module';
import { ArModule } from './ar/ar.module';
import { SgaModule } from './sga/sga.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoginModule,
    MainModule,
    SessionModule,
    AngularMaterialModule,
    HttpModule,
    BrowserAnimationsModule,
    DirectiveModule,
/*    InvoModule,
    AssetModule,
    SetupModule,
    GlModule,
    ArModule,
    SgaModule,*/
  ],
  declarations: [
    FinancialComponent,
    CatogoryComponent,
  ],
  providers: [
    CatogoryService,
    ConsoleLogService
  ],
})
export class FinancialModule { }
