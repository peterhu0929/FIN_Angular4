import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HrService } from '../hr.service';
import { StockOption } from '../../../_model/StockOption';
import { StockOptionEmployee } from '../../../_model/StockOptionEmployee';
import { StockOptionEmployeeViewModel } from '../../../_model/StockOptionEmployeeViewModel';
import { ConsoleLogService } from '../../../_services/console-log.service';

import { MatDialog } from '@angular/material';
import { FinDialogService } from '../../../_services/fin-dialog/fin-dialog.service';
import { FinDialogComponent } from '../../../_services/fin-dialog/fin-dialog.component';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

import { TodoItem } from './todo-item'
import { Hr02010WEditComponent } from './hr02010w-edit/hr02010w-edit.component';
@Component({
  selector: 'app-hr02010w',
  templateUrl: './HR02010W.component.html',
  styleUrls: ['./HR02010W.component.scss']
})
@Injectable()
export class HR02010WComponent implements OnInit {

  // 可以看到子Component的東西
  @ViewChild(Hr02010WEditComponent) userProfile: Hr02010WEditComponent;
  public stockinfo: StockOption;
  public employee: StockOptionEmployee;
  public employeeview: StockOptionEmployeeViewModel;
  public opened = true;
  public stockoption: TodoItem = new TodoItem();
  public option: TodoItem;
  public options: TodoItem[];

  public switchedit = true;
  public showstock = false;
  public showconfirm = false;
  public buystock = 0;
  public buystockfix = 0;
  public testvalue = '';
  // public unitprice: number = 0;
  // public stocktotalamtpart: number = 0;
  span: HTMLElement;

  constructor(private hrservice: HrService,
    private log: ConsoleLogService,
    public dialog: MatDialog,
    private _DialogService: FinDialogService) {
    this.log.WriteLog('constructor=>');
  }
  showOption(sid, stext) {
    this.log.WriteLog(sid);
    this.stockoption.id = sid;
    this.stockoption.text = stext;
    if (sid === 3) {
      this.showstock = true;
    }
  }
  ngOnInit() {
    this.stockinfo = new StockOption();
    this.employee = new StockOptionEmployee();
    this.employeeview = new StockOptionEmployeeViewModel();

    this.log.WriteLog('ngOnInit=>');
    this.log.WriteLog(this.employeeview);
    this.hrservice.GetStockOptionEmployee().subscribe(x => this.initfunc(x));
    this.hrservice.GetStockOptionEmployee().subscribe((x: any) => this.log.WriteLog(x));
  }

  buyflag(): void {
    if (this.stockoption.id === 1 || this.stockoption.id === 2) {
      this.switchedit = !this.switchedit;
      if (this.stockoption.id === 1) {
        this.employeeview.stockOptionEmployee.SHARE_NUMBER = this.employeeview.stockOptionEmployee.CAN_SHARE_NUMBER;
      }
      if (this.stockoption.id === 2) {
        this.employeeview.stockOptionEmployee.SHARE_NUMBER = this.buystock * 1000;
      }
    } else {
      this.switchedit = true;
      this.showconfirm = true;
    }

  }
  initfunc(x): void {
    this.employeeview = x;
    this.log.WriteLog('initfunc=>');
    this.log.WriteLog(this.employeeview);
    this.stockinfo = x.stockOption;
    this.employee = x.stockOptionEmployee;

    this.log.WriteLog(this.employeeview.stockOptionEmployee.IDCARD);
    const unitprice: any = this.employeeview.stockOption.UNIT_PRICE;
    const cansharenumber: any = this.employeeview.stockOptionEmployee.CAN_SHARE_NUMBER;
    const stocktotalamt: string = (unitprice * cansharenumber).toString();
    this.buystock = Math.floor(this.employeeview.stockOptionEmployee.CAN_SHARE_NUMBER / 1000);
    this.buystockfix = this.buystock;
    const strOption1: string = '本人同意全數認購，總認購金額為新台幣 ' + stocktotalamt + '  元。';
    const strOption2 = '本人同意部分認購，總認購金額為每股認購價格「乘」總認購股數。（屆時您的現金增資繳款通知書上之認股股數及金額，將依您現在所選擇之認股張數計算之）';
    const strOption3 = '本人放棄此次增資認購。（您現在若選擇放棄認購，屆時將不會收到現金增資繳款通知書）';
    this.options = [
      { text: strOption1, id: 1 },
      { text: strOption2, id: 2 },
      { text: strOption3, id: 3 }
    ];
  }

  valuechange(newValue: number) {
    if (newValue > this.buystockfix || newValue < 1) {
      this._DialogService.OpenDialogBox('部分認購股數大於　' + this.buystockfix + '千股或小於　1千股');
      this.buystock = 1;
    }
    // else {
    // this.stocktotalamtpart  = (this.unitprice * newValue);
    // }
  }

  confirm1() {
    this.employeeview.stockOptionEmployee.SHARE_NUMBER = 0;
    this.employeeview.stockOptionEmployee.EMPLOYEE_OPTION = '0';
    this.hrservice.UpdateOptionEmployee(this.employeeview.stockOptionEmployee).subscribe(
      (response: Response) => this.userProfile.ReturnStockOptionEmployeeDataPost(response),
      (error: HttpErrorResponse) => this.userProfile.HandleError(error));
  }

  ngOnChange(val: number) {
    this.switchedit = true;
  }

  public open() {
    this.opened = true;
  }
  public closed() {
    this.opened = false;
  }

}
