import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(public http:HttpClient) { }

  getCountries(){

    return this.http.get<any>("https://api.covid19api.com/countries");
}
  }
  
