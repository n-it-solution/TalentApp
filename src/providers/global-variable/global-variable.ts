import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariableProvider {
  apiUrl:string;
  domain:string;
  loginStatus: boolean = false;
  loginData:any;
  constructor(public http: HttpClient) {
    console.log('Hello GlobalVariableProvider Provider');
    // this.domain = 'https://www.worldctalenthubb.com';
    this.domain = 'http://192.168.1.6';
    this.apiUrl = this.domain + '/api';
  }
}
