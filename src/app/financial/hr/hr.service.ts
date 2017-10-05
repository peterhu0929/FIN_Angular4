import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../../_services/session.service';
// import { ilisEnvironment } from '../../../environments/environment';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { StockOption } from '../../_model/StockOption';
import { StockOptionEmployeeViewModel } from '../../_model/StockOptionEmployeeViewModel';
import { StockOptionEmployee } from '../../_model/StockOptionEmployee';
import { Observable } from 'rxjs/Observable';
import { GridWebAPIService } from '../../_shared/grid-webAPI.abstract';
import { FinDialogService } from '../../_services/fin-dialog/fin-dialog.service';

@Injectable()
export class HrService {
  public userInfoDatas;
  public stockoptions: StockOption;
  public userName = '';
  public cnt: string;
  constructor(
    private http: Http,
    private sessionservice: SessionService,
    private dialogService: FinDialogService) {
    this.userInfoDatas = JSON.parse(localStorage.getItem('currentUser'));
  }
  public UploadAccountImage(e: any, cid: string): any {
    console.log(e);
    console.log(e.file);
    const input = new FormData();
    input.append('file', e.file);
    input.append('idcard', cid);

    return this.http.post(process.env.API_URL + 'api/StockOptionEmployee/PostFormData', input);
  }
  public SendOpenEmail(): void {
    const ReSendEmailURL = process.env.API_URL + 'api/StockOptionEmployee/SendOpenEmail';
    this.http.get(ReSendEmailURL).subscribe(
      (response: Response) => this.ReturnSendOpenEmail(response),
      (error: HttpErrorResponse) => this.HandleError(error));
  }
  private ReturnSendOpenEmail(response: any): void {
    const people = response.json().data.employees;
    this.cnt = people.length;
    this.dialogService.OpenDialogBox('發送成功,總共' + this.cnt + '人');
    console.log(people);
  }
  public ReSendReminderEmail(): void {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('cache-control', 'no-cache');
    // const options = new RequestOptions({ headers: headers })
    const ReSendEmailURL = process.env.API_URL + 'api/StockOptionEmployee/SendReminderEmail';
    this.http.get(ReSendEmailURL).subscribe(
      (response: Response) => this.ReturnReSendReminderEmail(response),
      (error: HttpErrorResponse) => this.HandleError(error));
  }
  private ReturnReSendReminderEmail(response: any): void {
    const repeople = response.json().data.employees;
    for (const i of repeople) {
      // this.userName = people[i].EMPLOYEE_NAME;
      this.userName = this.userName + i.EMPLOYEE_NAME + ',';
    }
    this.cnt = repeople.length;
    this.dialogService.OpenDialogBox('已重新發送給 ' + this.userName + '共' + this.cnt + '人' );
    this.userName = '';
    console.log(repeople);
  }

  // HR02010W
  public GetStockOptionEmployee(): Observable<StockOptionEmployeeViewModel> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'no-cache');
    headers.append('Authorization', this.sessionservice.GetAuthorization());
    const options = new RequestOptions({ headers: headers })
    const stockoptionURL = process.env.API_URL + 'api/StockOptionEmployee?id=' + this.userInfoDatas.CID;
    return this.http.get(stockoptionURL, options)
      .map((response: Response) => this.ReturnStockOptionEmployeeData(response));
  }
  private ReturnStockOptionEmployeeData(response: any): StockOptionEmployeeViewModel {
    if (response.json().isSuccess === true) {
      return response.json().data as StockOptionEmployeeViewModel;
    } else {
      alert(response.json().message);
    }
  }

  public UpdateOptionEmployee(stockOptionEmployee: StockOptionEmployee): any {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.sessionservice.GetAuthorization());
    const options = new RequestOptions({ headers: headers })
    const stockoptionURL = process.env.API_URL + 'api/StockOptionEmployee/Post';
    // const stockoptionURL = 'http://localhost:54727/api/StockOptionEmployee';
    return this.http.post(stockoptionURL, JSON.stringify(stockOptionEmployee), options);
    // .subscribe(
    //   (response: Response) => this.ReturnStockOptionEmployeeDataPost(response),
    //   (error: HttpErrorResponse) => this.HandleError(error));
  }

  public GetStockOption(): Observable<StockOption> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'no-cache');
    headers.append('Authorization', this.sessionservice.GetAuthorization());
    const options = new RequestOptions({ headers: headers })
    const stockoptionURL = process.env.API_URL + 'api/StockOption';
    return this.http.get(stockoptionURL, options)
      .map((response: Response) => this.ReturnStockOptionData(response),
      (error: HttpErrorResponse) => this.HandleError(error));
  }
  private ReturnStockOptionData(response: any): StockOption {
    return response.json().data.items[0] as StockOption;
  }
  public UpdateStockOption(stockOptions: StockOption): void {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.sessionservice.GetAuthorization());
    const options = new RequestOptions({ headers: headers })
    const stockoptionURL = process.env.API_URL + 'api/StockOption/Post';
    stockOptions.PAYMENT_PERIOD_TO.toLocaleDateString();
    stockOptions.PAYMENT_PERIOD_FROM.toLocaleDateString();
    stockOptions.REPLY_DATE.toLocaleDateString();
    stockOptions.EXPIRE_DATE.toLocaleDateString();
    this.http.post(stockoptionURL, JSON.stringify(stockOptions), options)
      .subscribe(
      (response: Response) => this.ReturnStockOptionDataPut(response),
      (error: HttpErrorResponse) => this.HandleError(error));
  }
  private HandleError(e: any): void {
    console.log(e);
    console.log(e.json());
    this.dialogService.OpenDialogBox(e.statusText);
  }
  private ReturnStockOptionDataPut(response: any): void {
    this.dialogService.OpenDialogBox('Success');
  }
}

@Injectable()
export class HR03010WDetailGridService extends GridWebAPIService {
  constructor(_http: Http) { super(_http, 'StockOptionEmployee'); }

  public queryForCategory({ KEY_NO }: { KEY_NO: number }, state?: any): void {
    try {
      state.filter.filters.push({ field: 'F_KEY_NO', operator: 'eq', value: KEY_NO });
      this.query(state);
    } catch (e) {
      this.query(Object.assign({}, state, {
        filter: {
          filters: [{
            field: 'F_KEY_NO', operator: 'eq', value: KEY_NO
          }],
          logic: 'and'
        }
      }));
    }
  }

}

@Injectable()
export class HR03010WMasterGridService extends GridWebAPIService {
  constructor(_http: Http) {
    super(_http, 'StockOption');
  }
}
