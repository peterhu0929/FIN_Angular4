import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  private _url: any = '/api/sysModules';  // URL to web api
  constructor(private http: Http) {
  }
  getSysModuleDatas(): Promise<any> {
    return this.http.get(this._url)
      .toPromise()
      .then((response: any) => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    alert('An err occud' + error);
    return Promise.reject(error.message || error);
  }
}
