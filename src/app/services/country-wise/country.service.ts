import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getGlobal()
  {
    return this.http.get<any>("https://corona.lmao.ninja/v2/all?yesterday")
  }
  getAllCountries()
  {
    return this.http.get<any>("https://corona.lmao.ninja/v2/countries?yesterday&sort");
  }
  getCountryData(country:any)
  {
    // return this.http.get<any>("https://disease.sh/v3/covid-19/historical/India?lastdays=all");
    return this.http.get<any>(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`)
  }

}
