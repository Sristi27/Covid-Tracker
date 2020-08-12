import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(public http: HttpClient) { }

  getCountries() {

    return this.http.get<any>("https://api.covid19api.com/countries");
  }
  getCountryData(country:any):Observable<any>{

    const url="https://api.covid19api.com/total/dayone/country/" + country;
    return this.http.get<any>(url);
  }
}

