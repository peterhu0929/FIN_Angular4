import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-supmgr03',
  templateUrl: './supmgr03.component.html',
  styleUrls: ['./supmgr03.component.css']
})
export class Supmgr03Component implements OnInit {

  private _pgName: any;
  // url = 'https://ymfindev02.yangming.com/acctmvc/';
  url = process.env.API_URL;
  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.data.forEach((data: any) => {
      this._pgName = data['pgName'];
      this.url += this._pgName + '/Index';
    });
  }

}
