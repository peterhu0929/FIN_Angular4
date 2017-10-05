import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSessionService} from '../session/app-session.service';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class MainService {
  private url: string = 'http://ymfindev02.yangming.com/acctmvc' + '/api/User/GetUserMenu';

  constructor(private http: Http,
              private sessionService: AppSessionService) {
  }

  /* getMenuDatas(): Promise<any> {
    let body: any = new URLSearchParams();
    // body.set('moudle', this.sessionService.getMoudle().toString());
    body.set('moudle', 'ILIS');
    body.set('userId', this.sessionService.getUser().USER_ID);
    let headers: any = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options: any = new RequestOptions({headers: headers});

    return this.http.post(this.url, body, options)
      .toPromise()
      .then((response: any) => response.json())
      .catch(this.handleError);
  }

  getSideNavDatas(moduleid): Promise<any> {
    var url =  'api/uesrPrograms';
    return this.http.get(url)
      .toPromise()
      .then(x => x.json().data)
      .catch(this.handleError);
  } */

  private handleError(error: any): Promise<any> {
    alert('An err occud' + error);
    return Promise.reject(error.message || error);
  }
}
