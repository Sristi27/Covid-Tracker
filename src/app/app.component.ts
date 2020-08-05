import { Component,OnDestroy,OnInit } from '@angular/core';
import {CoronaService} from "./services/corona.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-tracker';
  countries=[];

  constructor(private service:CoronaService){};

  ngOnInit(){

    this.service.getCountries().subscribe(
      data=>
      {
        this.countries=data;
        console.log(data)
      }
    )
  }
}
