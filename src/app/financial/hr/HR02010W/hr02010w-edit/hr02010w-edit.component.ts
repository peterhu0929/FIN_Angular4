
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockOptionEmployeeViewModel } from '../../../../_model/StockOptionEmployeeViewModel';
import { ConsoleLogService } from '../../../../_services/console-log.service';
import { HrService } from '../../hr.service';

import { MatDialog } from '@angular/material';
import { FinDialogService } from '../../../../_services/fin-dialog/fin-dialog.service';
import { FinDialogComponent } from '../../../../_services/fin-dialog/fin-dialog.component';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
@Component({
  selector: 'app-hr02010w-edit',
  templateUrl: './hr02010w-edit.component.html',
  styleUrls: ['./hr02010w-edit.component.scss']
})
export class Hr02010WEditComponent implements OnInit {

  @Input() data: StockOptionEmployeeViewModel;

  @Output() result = new EventEmitter<number>();
  public birthdayc = '';
  public prevflag = 0;
  public message = '';
  public postreturn: any;
  public dialogResult: Observable<any>;
  public imageFile: File;
  public formData = new FormData();
  public uploadImageMessage = '';
  public expireflag = true;
  // employee : StockOptionEmployee;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private log: ConsoleLogService,
    private hrservice: HrService,
    public dialog: MatDialog,
    private _DialogService: FinDialogService
  ) { }

  ngOnInit() {
    this.birthdayc = this.convertFromWesternToChinse(this.data.stockOptionEmployee.BIRTHDAY);
  }

  public ReturnStockOptionEmployeeDataPost(response: any): void {
    this.message = '系統已發送「確認信」至您的電子信箱(' + this.data.stockOptionEmployee.FLEX1 + ')，請務必依信件內容指示完成確認程序，此次填寫或修改才正式生效。';
    // return response.json().data.stockOptions as StockOption;
    this.log.WriteLog(this.message);
    this._DialogService.OpenDialogBox(this.message);
  }

  public HandleError(e: any): void {
    console.log(e);
    console.log(e.json().exception);
    this._DialogService.OpenDialogBox(e.json().error);
  }

  confirm(): void {
    if (typeof (this.data.stockOptionEmployee.MAILING_ADDRESS) !== 'undefined' && this.data.stockOptionEmployee.MAILING_ADDRESS !== null
      && typeof (this.data.stockOptionEmployee.PHONE_NUMBER) !== 'undefined' && this.data.stockOptionEmployee.PHONE_NUMBER !== null
      && typeof (this.data.stockOptionEmployee.TDCC_ID) !== 'undefined' && this.data.stockOptionEmployee.TDCC_ID !== null
      && typeof (this.data.stockOptionEmployee.MAILING_POST_CODE) !== 'undefined' && this.data.stockOptionEmployee.MAILING_POST_CODE !== null) {
      if (this.data.stockOptionEmployee.TDCC_ID.length == 11 &&
        this.data.stockOptionEmployee.MAILING_ADDRESS.length >= 3 &&
        this.data.stockOptionEmployee.PHONE_NUMBER.length >= 3 &&
        this.data.stockOptionEmployee.MAILING_POST_CODE.length == 3 &&
        this.data.stockOptionEmployee.CAN_SHARE_NUMBER >= this.data.stockOptionEmployee.SHARE_NUMBER) {
        this.log.WriteLog(this.data.stockOptionEmployee);
        this.data.stockOptionEmployee.EMPLOYEE_OPTION = '1';
        this.hrservice.UpdateOptionEmployee(this.data.stockOptionEmployee).subscribe(
          (response: Response) => this.ReturnStockOptionEmployeeDataPost(response),
          (error: HttpErrorResponse) => this.HandleError(error));
      } else {
        this._DialogService.OpenDialogBox('資料有誤 - 請檢查聯絡電話，通訊地址，郵遞區號，集保帳號相關欄位。');
      }
    } else {
      this._DialogService.OpenDialogBox('資料有誤 - 請檢查聯絡電話，通訊地址，郵遞區號，集保帳號相關欄位。');
    }
  }

  submit(): void {
    this.location.back();
  }

  public imageUploaded(e) {
    this.hrservice.UploadAccountImage(e, this.data.stockOptionEmployee.IDCARD).subscribe(
      (response: Response) => { alert('Success') },
      (error: HttpErrorResponse) => { alert('Fail!') }
    );
  }
  goBack(): void {
    this.location.back();
  }

  // 西元轉民國，如20141104轉1021104
  convertFromWesternToChinse(western: Date): string {
    const year: number = Number(String(western.getFullYear()).substring(0, 4)) - 1911;
    const monthDate: string = (western.getMonth() + 1).toString() + western.getDate().toString()
    this.log.WriteLog(monthDate);
    return (String(year) + monthDate).substring(0, 8);
  }

  checkexpiredate(): any {
    const today = new Date();
    const stockDate = this.data.stockOption.EXPIRE_DATE;
    const msDateToday = new Date(stockDate);
    let expireDateAdd = msDateToday.getDate() + 1;
    msDateToday.setDate(expireDateAdd);

    if (msDateToday < today) {
      return true;
    } else {
      return null;
    }
  }
  prevstep() {
    this.result.emit(this.prevflag);
  }
}
