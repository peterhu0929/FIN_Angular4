import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {USERS} from '../_model/USERS';
import {UserProgram} from '../_model/menu';
import {ProgramModule} from '../_model/menu';
import {ProgramCatalog} from '../_model/menu';
import {UserMenu} from '../_model/menu';

@Injectable()
export class MenuService {
  private _menu: UserMenu;

  constructor() {
  }

  public GetUserMenu(): UserMenu {
    this._menu = JSON.parse(localStorage.getItem('currentMenu'));
    return this._menu;
  }

  public GetModule(moduleid: number): ProgramModule {
    // 確定只有一筆資料因此使用[0]
    return JSON.parse(localStorage.getItem('currentMenu')).filter(y => y.moduleid === moduleid)[0].function;
  }

  public GetCatogory(moduleId: number, catogoryId: number): ProgramCatalog {
    // 確定只有一筆資料因此使用[0]
    return JSON.parse(localStorage.getItem('currentMenu')).filter(y => y.moduleid === moduleId)[0].function.filter(x => x.id === catogoryId)[0];
  }

  public GetProgram(moduleId: number, catogoryId: number, programId: number): UserProgram {
    // 確定只有一筆資料因此使用[0]
    return JSON.parse(localStorage.getItem('currentMenu')).filter(y => y.moduleid === moduleId)[0].function.filter(x => x.id === catogoryId)[0].program.filter(z => z.id === programId)[0];
  }

}
