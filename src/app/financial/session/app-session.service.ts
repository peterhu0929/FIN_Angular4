import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {INCREMENT, DECREMENT, RESET, USER_LOGGED_IN, USER_LOGGED_OUT} from './app.reducer';
import {IState} from './state.model';
import {Store} from '@ngrx/store';
import {AutoLogoutService} from './auto-logout.service';
import {USERS} from '../../_model/USERS';

@Injectable()
export class AppSessionService {
  counter$: Observable<number>;
  loggedIn$: Observable<boolean>;
  private user: USERS ;
  private moudle: string;
  constructor(private store: Store<IState>,
              private  autoLogoutService: AutoLogoutService,
  )
  {
    this.counter$ = store.select('counter') as Observable<number>;
    this.loggedIn$ = store.select('loggedIn') as Observable<boolean>;
  }

  login(): void {
    this.store.dispatch({type: USER_LOGGED_IN});
  }
  logout(): void {
    this.store.dispatch({type: USER_LOGGED_OUT});
  }
  increment(): void {
    this.store.dispatch({type: INCREMENT});
  }
  decrement(): void {
    this.store.dispatch({type: DECREMENT});
  }
  getUser(): USERS {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    return this.user;
  }
  getMoudle(): string {
    this.moudle = JSON.parse(localStorage.getItem('currentMoulde'));
    return this.moudle;
  }
}
