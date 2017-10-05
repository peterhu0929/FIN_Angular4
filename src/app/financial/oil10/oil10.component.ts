import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-oil10',
  templateUrl: './oil10.component.html',
  styleUrls: ['./oil10.component.css']
})
export class Oil10Component implements OnInit {

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
