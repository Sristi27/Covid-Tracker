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
  

  constructor(private service: CoronaService,
    private elementRef:ElementRef) { };


  ngOnInit() {

    
    
  }

}

