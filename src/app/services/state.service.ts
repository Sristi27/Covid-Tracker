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
}
