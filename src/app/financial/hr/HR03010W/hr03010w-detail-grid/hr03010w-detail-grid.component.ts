import { Observable } from 'rxjs/Observable';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Input, OnInit, Component } from '@angular/core';
import { HR03010WDetailGridService } from '../../hr.service';
import {State, toDataSourceRequestString} from '@progress/kendo-data-query';
import { state } from '@angular/animations';
import { Http } from '@angular/http';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { ilisEnvironment } from '../../../../../environments/environment';

/// <reference types="node" />
@Component({
  selector: 'app-hr03010w-detail-grid',
  templateUrl: './hr03010w-detail-grid.component.html'
})
export class HR03010WDetailGridComponent implements OnInit {

  /**
   * The category for which details are displayed
   */
  @Input() public dataItem: Object;

  public view: Observable<GridDataResult>;
  public pageSize = 10;
  public state: State = {
    skip: 0,
    take: 10
  };

  constructor(
    private _service: HR03010WDetailGridService,
    private _http: Http) {
    this.allData = this.allData.bind(this);
  }

  public ngOnInit(): void {
    this.view = this._service;
    /*load products for the given category*/
    this._service.queryForCategory(<any>this.dataItem, { skip: this.state.skip, take: 10 });
  }

  public pageChange({skip, take}: PageChangeEvent): void {
    this.state.skip = skip;
    this.state.take = take;
    // this.service.queryForCategory(<any>this.dataItem, { skip, take });
    this.loadData();
  }

  public dataStateChange({ skip, take, sort, filter }: DataStateChangeEvent): void {
    // Save the current state of the Grid component
    this.pageSize = take;
    this.state.sort = sort;
    this.state.skip = skip;
    this.state.filter = filter;

    // Reload the data with the new state
    this.loadData();
  }
  private loadData(): void {
    this._service.queryForCategory(<any>this.dataItem, { skip: this.state.skip, take: this.pageSize, sort: this.state.sort, filter: this.state.filter });
  }
  public allData(): Observable<ExcelExportData> {
    let excelState: State = {};
    excelState.filter = this.state.filter;
    try {
      excelState.filter.filters.push({ field: 'F_KEY_NO', operator: 'eq', value: (<any>this.dataItem).KEY_NO });
    } catch (e) {
      excelState = Object.assign({}, excelState, {
        filter: {
          filters: [{
            field: 'F_KEY_NO', operator: 'eq', value: (<any>this.dataItem).KEY_NO
          }],
          logic: 'and'
        }
      })
  }

  const queryStr = `${toDataSourceRequestString(excelState)}&$count=true`;
    return this._http.get(process.env.API_URL + `api/StockOptionEmployee/GridRead?${queryStr}`)
  .map(response => response.json())
  .map(response => (<ExcelExportData>{
    data: response.Data
  }));
  }
}
