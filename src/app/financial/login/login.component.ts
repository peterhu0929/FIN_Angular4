import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AppSessionService } from '../session/app-session.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { SessionService } from '../../_services/session.service';
import { Session } from '../../_model/session';
import { UesrService } from '../../_services/user.service';
import { UserMenu } from '../../_model/menu';
import { I18nService } from '../../_services/i18n.service';
import { ConsoleLogService } from '../../_services/console-log.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public message = '';
  public moudle = 'ILIS';
  public sysMoudles: { code: string, name: string }[];
  public busy: Promise<any>;
  constructor(private appSessionService: AppSessionService,
    private autherticationService: AuthenticationService,
    private sessionService: SessionService,
    private i18nService: I18nService,
    private consoleLogService: ConsoleLogService,
    private http: Http,
    private router: Router) {
  }
  ngOnInit(): void {
    this.sysMoudles = [
      { 'code': 'ILIS', 'name': 'ILIS' },
      { 'code': 'YMGA', 'name': 'YMGA' },
      { 'code': 'VENDOR', 'name': 'Vendor' },
    ];
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentMoulde');
    localStorage.removeItem('currentMenu');
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/financial']);
    } else {
      this.autherticationService.logout();
    }
    // localStorage.removeItem('currentI18n');
    // this.i18nService.getI18n();
    // this.consoleLogService.WriteLog(localStorage.getItem('currentI18n'));
  }

  Login(): void {
    console.log(environment.production);

    this.appSessionService.login();
    let session: Session;
    session = new Session();
    let userService: UesrService;
    userService = new UesrService(this.http, this.sessionService);
    this.busy = this.autherticationService.Authenticate(this.username, this.password, this.moudle)
      .then(x => {
        if (x) {
          userService.GetUserPrograms(this.username, this.moudle)
            .then((menu: UserMenu) => {
              session = this.sessionService.GetSession();
              session.menu = menu;
              this.sessionService.ExtendServerSession(this.username, this.moudle).then();
            })
            .then(() => {
              userService.GetInformation(this.username).then(user => {
                session = this.sessionService.GetSession();
                session.user = user;

                localStorage.setItem('currentUser', JSON.stringify(session.user));
                localStorage.setItem('currentMoulde', session.module);
                localStorage.setItem('currentMenu', JSON.stringify(session.menu));
                localStorage.setItem('currentMachine', session.isLiveText);
                this.router.navigate(['/financial']);
              })
            });
        }
      });
    this.message = this.autherticationService.getMessage();
  }

}
