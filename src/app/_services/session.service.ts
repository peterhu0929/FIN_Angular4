import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Session} from '../_model/session';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
// import {ilisEnvironment} from '../../environments/environment';

@Injectable()
export class SessionService {
  private _session: Session;


  constructor(private http: Http ) {
    this._session = new Session();

  }

  public SetSession(session: Session): void {
    this._session = session;
    this._session.authorization = session.authenticationType + ' ' + session.token;
  }

  public GetSession(): Session {
    return this._session;
  }

  public GetAuthorization(): string {
    return this._session.authorization;
  }
  public GetMenu(): any {
    return this._session.menu;
  }


  public ExtendServerSession(username: string, moudle: string): Promise<boolean> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'no-cache');
    // headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpdGdmQHlhbmdtaW5nLmNvbSIsImV4cCI6InltbGl0Z2YxISJ9.rzG7p6uYTqHtswb_V4zromLQS82duMHYxbvTIsJ20l4');
    const options = new RequestOptions({headers: headers});
    const model = {'userId': username , 'moudle': moudle };
    const url = 'api/ILISSession/SetSessionData?userId=' + username + '&moudle=' + moudle;
    return this.http.get(process.env.API_URL + url).toPromise().then((x: any) => this._sessionResult(x.json()));
    // return this.http.post(this.url, model, options).toPromise().then((x: any) => this._saveJwt(x.json()));
  }

  private _sessionResult(res: any): boolean {
    // console.log(res);
    if (res.isSuccess) {
      return true;
    } else {
      return false;
    }
  }
}
