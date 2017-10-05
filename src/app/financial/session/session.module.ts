import { NgModule } from '@angular/core';
import { AppSessionService } from './app-session.service';
import { AutoLogoutService } from './auto-logout.service';
import {StoreModule} from '@ngrx/store';
import {appReducerAction} from './app.reducer';
import {initialState} from './state.model';
@NgModule({
  declarations: [
  ],
  imports: [
    StoreModule.provideStore(appReducerAction, initialState),
  ],
  exports: [
    StoreModule,
  ],
  providers: [
    AutoLogoutService,
    AppSessionService
  ],
})
export class SessionModule { }
