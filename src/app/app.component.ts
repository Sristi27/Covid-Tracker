import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoronaService } from "./services/corona.service"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-tracker';
  countries = [];
  status=false;
  val=""
  country: any;
  recovered:number=0;
  deaths:number=0;
  confirmed:number=0;

  constructor(private service: CoronaService) { };

  ngOnInit() {

    this.service.getCountries().subscribe(
      data => {
        this.countries = data;
        this.countries.sort();
        //console.log(this.countries)
        //console.log(data);
      }
    )
  }

  // getCountry(country: any) {
  //   //console.log(country)
  //   console.log(this.val)
  //   this.country =country;
  // }
  getData(name:any) {
    
    this.status=true;
    this.service.getCountryData(this.val).subscribe(
      data => {
        console.log(data)
        var index=data.length-1;
        this.confirmed=data[index].Confirmed;
        this.recovered=data[index].Recovered;
        this.deaths=data[index].Deaths;

      }
    )
  }

  }

