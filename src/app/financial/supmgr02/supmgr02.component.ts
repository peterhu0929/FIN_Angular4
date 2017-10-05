import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-supmgr02',
  templateUrl: './supmgr02.component.html',
  styleUrls: ['./supmgr02.component.css']
})
export class Supmgr02Component implements OnInit {

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
