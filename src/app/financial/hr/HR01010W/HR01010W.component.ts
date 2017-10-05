import { Component, OnInit } from '@angular/core';
import { HrService } from '../hr.service';
import { StockOption } from '../../../_model/StockOption';
import { ConsoleLogService } from '../../../_services/console-log.service';
import { Observable } from 'rxjs/Observable';
import { CommonModule } from '@angular/common';
import { RegularExpressionService } from '../../../_services/regular-expression.service';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { SessionModule } from '../../session/session.module';

export interface JsonModel {
  birthDate: string;
}

export interface User {
  birthDate: Date;
}
@Component({
  selector: 'app-demo',
  templateUrl: './HR01010W.component.html',
  styleUrls: ['./HR01010W.component.scss']
})

export class HR01010WComponent implements OnInit {
  public stockoptions: StockOption;
  public today: Date;
  public test_date: Date = new Date(2000, 2, 10, 13, 30, 0);
  date93;
  year: number;
  public OnlyNum: String = 'value=value.replace(/[^0-9]/g,\'\')';
  public opened: boolean = true;


  constructor(private hrService: HrService, private log: ConsoleLogService, private regularExpression: RegularExpressionService, private dateAdapter: DateAdapter<NativeDateAdapter>) { }

  ngOnInit() {
    this.dateAdapter.setLocale('zh-TW');
    this.date93 = new Date(1989, 8, 29);


    this.stockoptions = new StockOption();
    // this.log.WriteLog('S');
    this.hrService.GetStockOption().subscribe((x: any) => {
      x.REPLY_DATE = new Date(x.REPLY_DATE);
      x.PAYMENT_PERIOD_TO = new Date(x.PAYMENT_PERIOD_TO); // ngModel only input new Date()
      x.PAYMENT_PERIOD_FROM = new Date(x.PAYMENT_PERIOD_FROM);
      x.EXPIRE_DATE = new Date(x.EXPIRE_DATE);
      this.stockoptions = x;
    });
    // this.stockoptions.PAYMENT_PERIOD_TO = new Date(2017, 0, 3);
    // this.log.WriteLog(JSON.stringify(this.stockoptions));
    // this.hrService.GetStockOption().subscribe((x: any) => this.log.WriteLog(Date.parse(x.PAYMENT_PERIOD_TO).toString()));
    // this.log.WriteLog('E');
    // this.stockoptions.FLEX1 = '2019';
    // this.log.WriteLog('DATE93=' + this.date93);
  }
  confirm() {
    this.hrService.UpdateStockOption(this.stockoptions)
    // alert(this.stockoptions.STOCK_OPTION_NAME);
  }


  styleTest = {
    width : '800px'
  }

  onlyNum() {
    this.regularExpression.onlyNum(event);
  }

  onlyEng() {
    this.regularExpression.onlyEng(event);
  }
  public open() {
    this.opened = true;
  }
  public closed() {
    this.opened = false;
  }
  public send() {
    this.hrService.SendOpenEmail();
  }
}
