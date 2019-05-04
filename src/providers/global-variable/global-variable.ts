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
  constructor(public http: HttpClient) {
    console.log('Hello GlobalVariableProvider Provider');
    this.apiUrl = 'http://talent.localhost/api'
  }

}
