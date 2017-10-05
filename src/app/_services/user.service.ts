import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import {ilisEnvironment} from '../../environments/environment';
import {USERS} from '../_model/USERS';
import {UserMenu} from '../_model/menu';
import {SessionService} from './session.service';

@Injectable()
export class UesrService {
  private messgae: string;
  public user: any;

  constructor(private http: Http, private  sessionService: SessionService) {
  }

  public GetInformation(userID: string): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'no-cache');
    headers.append('Authorization', this.sessionService.GetAuthorization());
    const options = new RequestOptions({headers: headers});
    const userURL = process.env.API_URL + 'api/User?userID=' + userID;
    return this.http.get(userURL, options).toPromise().then((x: any) => this._getResult(x.json()));
    // return this.http.post(this.url, model, options).toPromise().then((x: any) => this._getPrograms(x.json()));
  }


  public GetUserPrograms(userID: string, module: string): Promise<UserMenu> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'no-cache');
    // headers.append('Authorization', this.sessionService.GetAuthorization() 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpdGdmQHlhbmdtaW5nLmNvbSIsImV4cCI6InltbGl0Z2YxISJ9.rzG7p6uYTqHtswb_V4zromLQS82duMHYxbvTIsJ20l4');
    headers.append('Authorization', this.sessionService.GetAuthorization());
    const options = new RequestOptions({headers: headers});
    const userURL = process.env.API_URL + 'api/UserMenu?userId=' + userID + '&module=' + module;
    return this.http.get(userURL, options).toPromise().then((x: any) => this._getPrograms(x.json()));
  }


  private _getResult(res: any): USERS {
    // console.log('res.data.user=' + JSON.stringify( res));

    if (res.isSuccess) {
      return res.data.user;
    } else {

      return null;
    }
  }

  private _getPrograms(res: any): UserMenu {
    // console.log('res.data.menu=' + JSON.stringify( res));

    if (res.isSuccess) {
      return res.data.menu;
    } else {

      return null;
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
}
