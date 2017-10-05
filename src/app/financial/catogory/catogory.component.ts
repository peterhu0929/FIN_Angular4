import { Component, OnInit, Input, OnChanges,
  trigger,
  state,
  style,
  transition,
  keyframes,
  animate } from '@angular/core';
import { CatogoryService } from './catogory.service';
import {SessionService} from '../../_services/session.service';
import {ConsoleLogService} from '../../_services/console-log.service';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.scss'],
})
export class CatogoryComponent implements OnInit {
  public catogories: any;
  // @Input() heroes;
  state = 'small';

  constructor(
    private _catogoryService: CatogoryService,
    private _sessionService: SessionService,
    private _consoleLog: ConsoleLogService,
  ) {

  }


  ngOnInit() {
    this.catogories = JSON.parse(localStorage.getItem('currentMenu'));
    this._consoleLog.WriteLog(this.catogories);
  }
}
