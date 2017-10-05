import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-web',
  templateUrl: './web.mvc.component.html',
  styleUrls: ['./web.mvc.component.scss'],
})
export class WebMvcComponent implements OnInit {

  pgName: any;
  //url: string =  ilisEnvironment.mvcFormRoot ;
  url: string = 'https://ymfindev02.yangming.com/acctmvc/';

  constructor(private route: ActivatedRoute) {
  }

  gotoGoogle(): void {
    window.location.href = 'https://www.google.com';
  }

  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      this.pgName = data['pgName'];
      this.url += this.pgName + '/Index';
    });
  }

}
