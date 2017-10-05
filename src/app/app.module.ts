import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {appRoutes, appRoutingProviders} from './app.routes';
import { AppComponent } from './app.component';
import {AuthGuard} from './_guard/authguard';
import {StoreModule} from '@ngrx/store';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FinancialModule } from './financial/financial.module';
import {SessionService} from './_services/session.service';
import {UesrService} from './_services/user.service';
import {AuthenticationService} from './_services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FinancialModule,
    appRoutes,
    FlexLayoutModule,
  ],
  providers: [
    appRoutingProviders,
    AuthenticationService,
    SessionService,
    UesrService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
