import { Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CoronaService } from "./services/corona.service"
import {Chart} from 'node_modules/chart.js';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-tracker';
  countries = [];
  status = false;
  val = ""
  country: any;
  recovered: number = 0;
  deaths: number = 0;
  active:number=0;
  confirmed: number = 0;
  chart1:any;

  globalC =0;
  globalR=0;
  globalD=0;
  globalA=0;

  newC=0;
  newR=0;
  newD=0;
  newA=0;

  

  constructor(private service: CoronaService,
    private elementRef:ElementRef) { };


  ngOnInit() {

    

    this.service.getSummary().subscribe(
      data=>
      {
        data=data.Global;
        this.globalC=data.TotalConfirmed;
        this.globalD=data.TotalDeaths;
        this.globalR=data.TotalRecovered;
        this.newC=data.NewConfirmed;
        this.newR=data.NewRecovered;
        this.newD=data.NewDeaths;
        this.newA=this.newC-this.newR-this.newD;
        this.globalA=this.globalC-this.globalR-this.globalD
      }
    )
    this.service.getCountries().subscribe(
      data => {
        this.countries = data;
        this.countries.sort();
      }
    )

  }

  
  getData(name: any) {

    
    this.country=name;
    var table = [];
    this.service.getCountryData(this.val).subscribe(
      data => {
        // console.log(data)
        this.status = true;
        var index = data.length - 1;
        for (var i = 0; i < data.length; i++) {
          table.push([data[i].Confirmed,i])
        }
        //this.data = table;
        this.confirmed = data[index].Confirmed;
        this.recovered = data[index].Recovered;
        this.deaths = data[index].Deaths;
        this.active=this.confirmed-this.recovered-this.deaths;
       
       this.getChart(this.confirmed,this.recovered,this.deaths);

      }
    )
  }

  getChart(c,r,d)
  {
    this.chart1 = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Active","Recovered","Deaths"],
        datasets: [{
          label: "Cases",
          data: [c,r,d],
        }]
      }
  });
  console.log(this.chart1)
  }

}

