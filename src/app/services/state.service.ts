import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http:HttpClient) { }

  getStateData()
  {
    return this.http.get<any>("https://api.covid19india.org/state_district_wise.json");
  }

  getStateTotalData()
  {
    return this.http.get("https://api.covid19india.org/data.json");
  }

  getStat()
  {
    return this.http.get("https://api.covid19api.com/country/india?from=2020-03-01T00:00:00Z&to=2021-03-01T00:00:00Z")
  }
  getStateTimewise()
  {
    return this.http.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history");
  }
}
