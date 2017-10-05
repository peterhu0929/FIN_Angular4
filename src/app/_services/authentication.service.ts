import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import {ilisEnvironment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Session} from '../_model/session';
import {SessionService} from './session.service';

@Injectable()
export class AuthenticationService {
  private messgae: string;
  public token: string;
  public user: any;
  private _token: string;
  private _user: any;
  private _authenticationType: string;


  constructor(private http: Http, private sessionService: SessionService) {
  }

  private _SetAuthenticationType(authenticationType: string): void {
    this._token = authenticationType;
  }

  private _SetToken(token: string): void {
    this._token = token;
  }

  private _SetUserInformation(user: any): void {
    this._user = user;
  }


  public GetAuthenticationType(): string {
    return this._authenticationType;
  }

  public GetToken(): string {
    return this._token;
  }

  public GetUserInformation(): any {
    return this._user;
  }

  public Authenticate(username: string, password: string, module: string): Promise<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'no-cache');
    // headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpdGdmQHlhbmdtaW5nLmNvbSIsImV4cCI6InltbGl0Z2YxISJ9.rzG7p6uYTqHtswb_V4zromLQS82duMHYxbvTIsJ20l4');
    const options = new RequestOptions({headers: headers});
    const model = {'userId': username, 'password': password, 'module': module};
    const url = 'api/Authentication?module=' + module + '&userId=' + encodeURIComponent(username.toUpperCase()) + '&password=' + encodeURIComponent( password);
    return this.http.get(process.env.API_URL + url).toPromise().then((x: any) => this._saveJwt(x.json()));
    // return this.http.post(this.url, model, options).toPromise().then((x: any) => this._saveJwt(x.json()));
  }

  private getSession(): any {
    return this.user;
  }

  private _saveJwt(res: any): boolean {
    // console.log(res);
    if (res.isSuccess) {
      let session: Session;
      session = new Session();
      session.token = res.data.token;
      session.module = res.data.module;
      session.authenticationType = res.data.authenticationType;
      session.isLiveText = res.data.isLive;
      session.user = res.data.user;
      this.sessionService.SetSession(session);
      this._SetAuthenticationType(res.data.authenticationType);
      this._SetToken(res.data.token);
      this._SetUserInformation(res.data.user);
      return true;
      // this.router.navigate(['/financial']);
    } else {
      this.messgae = res.message;
      // console.log(JSON.stringify(res));
      return false;
    }
  }

  private _saveError(data: any) {
    // console.log(JSON.stringify(data));
  }

  getMessage(): string {
    return this.messgae;
  }

  private handleError(error: any): Promise<any> {
    alert('An err occud' + error);
    return Promise.reject(error.message || error);
  }


  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = undefined;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentMoulde');
    localStorage.removeItem('currentMenu');
  }

  private handleErrorObservable(error: Response | any): any {
    return Observable.throw(error.message || error);
  }

  private extractData(res: Response): any {
    const body: any = res.json();
    return body;
  }
}
