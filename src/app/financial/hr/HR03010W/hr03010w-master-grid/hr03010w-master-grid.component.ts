import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { GridComponent, ExcelComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State, SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { HR03010WMasterGridService, HrService } from '../../hr.service';
import { StockOptionEmployee } from '../../../../_model/StockOptionEmployee';
@Component({
  selector: 'app-hr03010w-master-grid',
  templateUrl: './hr03010w-master-grid.component.html',
})
export class HR03010WMasterGridComponent implements OnInit, AfterViewInit {
  public stockoptionemployee: StockOptionEmployee;
  public view: Observable<GridDataResult>;
  public opened: boolean = false;
  // public sort: Array<SortDescriptor> = [];
  public pageSize = 10;
  // public skip = 0;
  public state: State = {
    skip: 0,
    take: 5,
  };
  @ViewChild(GridComponent) grid: GridComponent;

  constructor(private service: HR03010WMasterGridService, private hrservice: HrService) { }

  public ngOnInit(): void {
    // Bind directly to the service as it is a Subject
    this.view = this.service;

    // Fetch the data with the initial state
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

  public ngAfterViewInit(): void {
    // Expand the first row initially
    this.grid.expandRow(0);
  }

  private loadData(): void {
    this.service.query({ skip: this.state.skip, take: this.pageSize, sort: this.state.sort, filter: this.state.filter });
  }


  public open() {
    this.opened = true;
  }
  public closed() {
    this.opened = false;
  }
  reminder() {
    this.hrservice.ReSendReminderEmail();
  }
}
