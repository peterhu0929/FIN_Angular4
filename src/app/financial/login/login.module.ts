import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../_shared/angular-material.module';
import { LoginComponent } from './login.component';
import {AppSessionService} from '../session/app-session.service';
import {AuthenticationService} from '../../_services/authentication.service';
import { LoginService } from './login.service';
import { I18nService } from '../../_services/i18n.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {BusyModule} from 'angular2-busy/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    //  BusyModule,
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AppSessionService,
    AuthenticationService,
    LoginService,
    I18nService
  ]
})
export class LoginModule { }
