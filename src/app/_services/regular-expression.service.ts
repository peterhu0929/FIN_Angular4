import { Injectable } from '@angular/core';

@Injectable()
export class RegularExpressionService {

  constructor() { }
  onlyNum(event: any) {
    // const pattern = /[0-9]/;
    // const pattern = /[a-zA-Z/*-+.~!@#$%^&*()_|]/;
    // const pattern = /[\D]/; // 比對任一個非數字，等效於 [^0-9]
    // const pattern = /[(?!.*[^\x21-\x7e])]/;
    const pattern = /[\d]/; // 比對任一個數字，等效於 [0-9]
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  onlyEng(event: any) {
    const pattern = /[\D]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
