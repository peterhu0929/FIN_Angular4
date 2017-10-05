import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'router-outlet',
  templateUrl: './web.form.component.html',
  styleUrls: ['./web.form.component.scss'],
})
export class WebFormComponent implements OnInit {
  title: string;
  pgName: any;
  // url: string =  ilisEnvironment.webFormRoot;
  url: string = 'https://ymfindev02.yangming.com/acctmvc/';
  constructor(private _titleService: Title,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      this.pgName = data['pgName'];
      // this.url += this.pgName + '/Index';
    });
  }

}
