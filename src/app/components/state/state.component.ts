import { Component, Input, OnInit } from '@angular/core';

import {Chart} from 'node_modules/chart.js';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {


  @Input() date;
  @Input() confirmed;
  @Input() recovered;
  @Input() deaths;

  newChart;

  constructor() { 
  }

ngOnInit(): void {

  console.log(this.date,this.confirmed,this.deaths,this.recovered)
  this.createChart();
}

createChart()

{
  // console.log(this.confirmed,this.recovered,this.deaths)
  this.newChart=new Chart('linech',
  {
    type: 'line',
    data: {
      labels:this.date,
      datasets:[]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                  max:20000000,
                  min:0,
                  stepSize:5000000
                }
            }],
          //   xAxes: [{
          //     type: 'time',
          //     time: {
          //       displayFormats: {
          //         quarter: 'll'
          //     }
          //     },
          //     ticks: {
          //       min:'1 March 2020'
          //     }
          // }]
        }
    }
})
this.createData();
}

createData()
{
  var newData=[{
    label: 'Confirmed',
    data: this.confirmed,
    borderColor:'green',
    hoverBackgroundColor:'white'
    },
    {
      label: 'Recovered',
      data: this.recovered,
      borderColor:'blue',
      hoverBackgroundColor:'white'
    },
    {
    label: 'Deaths',
    data: this.deaths,
    borderColor:'red',
    hoverBackgroundColor:'white'
    }]

    this.updateGraph(this.newChart,newData)

}


updateGraph(chart,newData) {
  chart.data.datasets.pop();
  newData.forEach(element => {
    chart.data.datasets.push(
      {
        label:element.label,
        data:element.data,
        borderColor:element.borderColor,
        hoverBackgroundColor:element.hoverBackgroundColor
      }
    )
  });
  chart.update();
}



}
