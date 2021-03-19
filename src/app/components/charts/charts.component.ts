import { Component, Input, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {



  @Input() date;
  @Input() confirmed;
  @Input() recovered;
  @Input() deaths;

  newchart;

  constructor() { 
  }

ngOnInit(): void {

  // console.log(this.date,this.confirmed,this.deaths,this.recovered)
  this.createChart();
}

createChart()

{
  // console.log(this.confirmed,this.recovered,this.deaths)
  this.newchart=new Chart('linech',
  {
    type: 'line',
    data: {
      labels:this.date
    },
    options: {
        scales: {
          
            yAxes: [{
          //     gridLines:
          // {
          //   drawOnChartArea:false
          // },
                ticks: {
                  display:false
                }
            }],
            xAxes:[{
              gridLines:
          {
            drawOnChartArea:false,
            drawBorder:true
          },
              ticks:
              {
                display:false
              }
            }],
            responsive: true,
            maintainAspectRatio: true
           
          //   xAxes: [{
          //     // type: 'time',
          //     // time: {
          //     //   displayFormats: {
          //     //     quarter: 'll'
          //     // }
          //     // },
          //     ticks: {
          //       displ
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
    borderColor:'green'
    },
    {
      label: 'Recovered',
      data: this.recovered,
      borderColor:'blue'
    },
    {
    label: 'Deaths',
    data: this.deaths,
    borderColor:'red'
    }]

    this.updateGraph(newData);

}


updateGraph(newData) {
  
  // this.newchart.data.datasets=[];
  if(this.newchart.data.datasets)
  {
    for(let i=0;i<3;i++) this.newchart.data.datasets.pop();
  }
  newData.forEach(element => {
    this.newchart.data.datasets.push(
      {
        label:element.label,
        data:element.data,
        borderColor:element.borderColor,
        hoverBackgroundColor:element.hoverBackgroundColor
      }
    )
  });
  this.newchart.update();
}


}