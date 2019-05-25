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
    // this.domain = 'http://192.168.1.6';
    this.domain = 'http://192.168.0.115';
    // this.apiUrl = 'http://192.168.1.6/api';
    this.apiUrl = 'http://192.168.0.115/api';
  }
}
