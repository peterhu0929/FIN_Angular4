// main.component.ts
import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  query,
  group,
  stagger,
  transition,
  animateChild
} from '@angular/animations';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs';
import { Observable } from 'rxjs/Observable';


import { MainService } from './main.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AppSessionService } from '../session/app-session.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { USER_LOGGED_OUT } from '../session/app.reducer';
import { Store } from '@ngrx/store';
import { IState } from '../session/state.model';
import { SessionService } from '../../_services/session.service';
import { ConsoleLogService } from '../../_services/console-log.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  // styleUrls: ['./main.component.scss', '../../_shared/styles/styles.scss', '../../_shared/styles/_material-theme.scss'],
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimation', [
      transition('home => about', [
        group([
          query(':enter', [
            animate('2s', style({ transform: 'translateX(-100%)' })),
            animateChild()
          ],
            { optional: true }
          ),
          query(':leave', [
            animate('2s', style({ transform: 'translateX(100%)' })),
            animateChild()
          ],
            { optional: true }
          )
        ])
      ]),
      transition('about => home', [
        group([
          query(':enter', [
            animate('2s', style({ transform: 'translateX(-100%)' })),
            animateChild()
          ],
            { optional: true }
          ),
          query(':leave', [
            animate('2s', style({ transform: 'translateX(100%)' })),
            animateChild()
          ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public title: string;
  public sidenavOpen = true;
  public sidenavMode = 'over';
  public isMobile = false;
  public logoSrc = 'assets/image/ym-logo-w-wording-text.png';
  public sideNavDatas;
  public userInfoDatas;
  public isLive = 'empty';
  public i18nDatas;
  private _mediaSubscription: Subscription;

  constructor(private _media: ObservableMedia,
    private _consoleLog: ConsoleLogService,
    private _router: Router,
    private _activeRouter: ActivatedRoute,
    private _mainService: MainService,
    private _appSessionService: AppSessionService,
    private _store: Store<IState>,
    private _authenticationService: AuthenticationService,
    private _sessionService: SessionService) {
  }

  public prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'home';
  }

  Logout(): void {
    this._router.navigate(['/login']);
    this._store.dispatch({ type: USER_LOGGED_OUT });
    this._authenticationService.logout();
  }

  public ngOnInit() {
    this.isLive = localStorage.getItem('currentMachine').toString();
    this._mediaSubscription = this._media.asObservable().subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.sidenavOpen = !this.isMobile;
      this.sidenavMode = (this.isMobile ? 'over' : 'side');
      this.logoSrc = (
        this.isMobile ?
          'assets/image/ym-logo-wo-wording.png' :
          'assets/image/ym-logo-w-wording-text.png');
    });

    let parameter;
    this._activeRouter.params.subscribe(params => {
      parameter = +params['moduleId'];
    });
    this.sideNavDatas = JSON.parse(localStorage.getItem('currentMenu')).filter(y => y.moduleid === parameter)[0].function;
    this._consoleLog.WriteLog(this.sideNavDatas[0]);
    this.title = JSON.parse(localStorage.getItem('currentMenu')).filter(y => y.moduleid === parameter)[0].moduleName;
    this.userInfoDatas = JSON.parse(localStorage.getItem('currentUser'));
    this._consoleLog.WriteLog(this.userInfoDatas);
    // this.i18nDatas = JSON.parse(localStorage.getItem('currentI18n'));
    // this._consoleLog.WriteLog(this.i18nDatas);
  }
  public menuItemEvent(e: any): void {
    console.log(e);
    this.sidenav.toggle();
    this.title = this.title.split('-')[0];
    this.title += ' - ' + e.pg + e.text;
  }
}
