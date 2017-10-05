import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { GridComponent, ExcelComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State, SortDescriptor } from '@progress/kendo-data-query';
import { HrService, HR03010WMasterGridService } from '../hr.service';

@Component({
  selector: 'app-hr03010-w',
  templateUrl: './HR03010W.component.html',
  styleUrls: ['./HR03010W.component.css']
})
export class HR03010WComponent implements OnInit {
  constructor(private hrService: HrService) { }
  public ngOnInit(): void {
  }

}

