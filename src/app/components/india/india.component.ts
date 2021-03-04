import { Component, OnInit } from '@angular/core';
import {CountryService} from './../../services/country-wise/country.service';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {


  constructor(public countryService:CountryService,private stateService:StateService) { }
  indiaData;
  stateData;
  stateTotalData;
  states;
  val;
  specificState;
  ngOnInit(): void {
    this.countryService.getCountryData("India").subscribe
    (data=>{
      console.log(data)
      this.indiaData=data}
      )

      this.stateService.getStateData().subscribe(data=>
        {
          this.stateData=Object.entries(data).map((ele) => ( { [ele[0]]: ele[1] } )).slice(1);
          console.log(this.stateData)
          this.states=Object.keys(data).slice(1)
        })
  }

  getStateData(state)
  {
      console.log(this.val);
      this.stateService.getStateTotalData().subscribe(data=>
        {
          this.stateTotalData=Object.entries(data).map((ele) => ( { [ele[0]]: ele[1] } ))[1];
          this.stateTotalData=Object.values(this.stateTotalData)[0];
          this.specificState=this.stateTotalData.filter(ele=>ele.state==this.val)[0];
        }
      );

  }

}
