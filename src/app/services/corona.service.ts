import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(public http: HttpClient) { }

  getAllData()
  {
    return this.http.get<any>("https://disease.sh/v3/covid-19/all")
  }
  getAllCountriesData() {

    return this.http.get<any>("https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&sort=cases&allowNull=true");
  }
  getGlobalTimeseries()
  {
    return this.http.get("https://covid.ourworldindata.org/data/owid-covid-data.json")
  }
}

