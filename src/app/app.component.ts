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
  confirmed: number = 0;
  chart1:any;

  constructor(private service: CoronaService,
    private elementRef:ElementRef) { };


  ngOnInit() {

    this.service.getCountries().subscribe(
      data => {
        this.countries = data;
        this.countries.sort();
      }
    )

  }
  getSummary() {
    this.service.getSummary().subscribe(
      res => console.log(res)
    )
  }
  getData(name: any) {

    

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

