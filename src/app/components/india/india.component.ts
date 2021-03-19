import { Component, Input, OnInit } from '@angular/core';
import {CountryService} from './../../services/country-wise/country.service';
import {StateService} from '../../services/state.service';
import { CoronaService } from 'src/app/services/corona.service';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA = [];



@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})

export class IndiaComponent implements OnInit {


  constructor(public countryService:CountryService,
    private stateService:StateService,private coronaService:CoronaService) { }
  indiaData;
  stateData;
  indiaDate;
  indiaConfirmed=[];
  indiaDeaths=[];
  indiaVaccine;
  indiaRecovered=[];
  stateTotalData;
  show=false;
  states=[];
  stateTimewise;
  specificStateData;
  allStateData=[];
  date=[];
  specificStateConfirmed=[];
  specificStateDeaths=[];
  specificStateRecovered=[];




  displayedColumns = ['name',  'confirmed'];
  dataSource;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {



    this.countryService.getCountryTimewise('India').subscribe(data=>
      {
         var data_country=data.timeline;
         this.indiaDate=Object.keys(Object.values(data_country)[0]);
         this.indiaConfirmed=Object.values(Object.values(data_country)[0]);
         this.indiaDeaths=Object.values(Object.values(data_country)[1]);
         this.indiaRecovered=Object.values(Object.values(data_country)[2]);
         this.countryService.getCountryVaccineData("India").subscribe(data=>
          {
            var vacData=Object.values(data.timeline).pop();
            this.indiaVaccine=vacData;
          })
        //  console.log(this.countryConfirmed)
      })



    this.stateService.getStateTotalData().subscribe(data=>
      {
          this.allStateData=Object.values(Object.entries(data).map((ele) => ( { [ele[0]]: ele[1] } ))[1])[0];
          this.indiaData=this.allStateData[0];
          this.indiaData=this.setCardData(this.indiaData,"India");
          console.log(this.indiaData)
          this.allStateData.splice(0,1)
          this.allStateData.splice(this.allStateData.length-1,1)
          console.log(this.allStateData)
          for(let ele in this.allStateData)
          {
            this.states.push(this.allStateData[ele].state);
            ELEMENT_DATA.push({name:this.allStateData[ele].state,confirmed:this.allStateData[ele].confirmed})
            
          }
          this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      })


      this.stateService.getStateTimewise().subscribe(
        data=>
        {
          data=Object.values(Object.entries(data).map((ele) => ( { [ele[0]]: ele[1] } ))[1])[0];
          this.stateTimewise=(Object.values(data)[2]);
        }
      )
  }


  
  setCardData(data,name)
  {
     var cardData={
      Country:name,
      TotalConfirmed:data.confirmed,
      NewConfirmed:data.deltaconfirmed,
      TotalDeaths:data.deaths,
      TotalRecovered:data.recovered,
      NewDeaths:data.deltadeaths,
      NewRecovered:data.deltarecovered,
      vaccine:this.indiaVaccine
    }
    return cardData;
  }


  getData(row)
  {
     this.show=true;
     this.getStateData(row.name)
  }

  getStateData(state)
  {
      this.specificStateConfirmed.pop();
      this.specificStateDeaths.pop();
      this.specificStateRecovered.pop();
      this.date.pop();
      this.show=false;

      var specificState=this.allStateData.filter(ele=>ele.state==state)[0];
      // finding name of state seleceted and filter its data out from entire list
      // console.log(specificState)
      this.specificStateData=this.setCardData(specificState,state);
      // console.log(this.stateTimewise)
      for(let ele in this.stateTimewise)
      {
        //collecting all date daywise
        this.show=true;
         this.date.push(this.stateTimewise[ele].day);
         var specificDate=this.stateTimewise[ele].statewise.filter(st=>st.state==state)[0];
         this.specificStateConfirmed.push(specificDate.confirmed);
         this.specificStateRecovered.push(specificDate.recovered);
         this.specificStateDeaths.push(specificDate.deaths);
      }
      // console.log(this.date,this.specificStateRecovered)
    
  }

}
