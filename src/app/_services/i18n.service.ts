import { Injectable } from '@angular/core';
// import { ilisEnvironment } from '../../environments/environment';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class I18nService {
  private _log: string;
  constructor(private _http: Http) {
  }
  public getI18n() {
    const culture = navigator.language;
    const url = process.env.API_URL + 'api/I18n?lang=' + culture;
    this._http.get(url).subscribe((x: any) => this.SetI18nDatas(x.json())); // 得到資料放到localStorage
  }
  public GetLogMessage() {
    return this._log;
  }
  private SetI18nDatas(data: any) {
    // const script = document.createElement('script');
    // script.type = 'application/javascript';
    // script.src = data;
    // document.body.appendChild(script);
    this._log = 'navigator.language:' + navigator.language;
    localStorage.setItem('currentI18n', JSON.stringify(data));
  }
}
