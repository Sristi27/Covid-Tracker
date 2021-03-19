import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/services/corona.service';
import { CountryService } from 'src/app/services/country-wise/country.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor(private countryService:CountryService,private coronaService:CoronaService) { }

  countriesData;
  countries=[];
  countrySpecific;
  globalTotal;
  val;
  date=[];
  countryConfirmed=[];
  countryDeaths=[];
  show=false;
  countryRecovered=[];
  summary;
  globalVaccine;
  countryVaccine;
  countrySpecificChartdata=[];
  
  totalCasesperMillion=[];

  ngOnInit(): void {


    this.coronaService.getAllData().subscribe(data=>
      {  
        var vacData;
        this.countryService.getGlobalVaccineData().subscribe
        (vac=>
        {
          vacData=Object.values(vac).pop();
          this.globalTotal=this.setCardData(data,vacData,'Global')
          // console.log(this.globalTotal)
      
        })
        
      })

  
   this.coronaService.getAllCountriesData().subscribe(data=>
    {
       this.countriesData=data;
       for(let ele in data) this.countries.push(data[ele].country);
    })
    
  }



  change(event)
  {
     this.show=false;
  }

  setCardData(data,vaccine,name)
  {
     var cardData={
      Country:name,
      TotalConfirmed:data.cases,
      NewConfirmed:data.todayCases,
      TotalDeaths:data.deaths,
      TotalRecovered:data.recovered,
      NewDeaths:data.todayDeaths,
      NewRecovered:data.todayRecovered,
      vaccine:vaccine
    }
    return cardData;
  }


  makeChartData(country)
  {
      this.countryService.getCountryTimewise(country).subscribe(data=>
        {
           var data_country=data.timeline;
           this.date=Object.keys(Object.values(data_country)[0]);
           for(let ele=0;ele<this.date.length;ele++)
            {
               var curr=this.date[ele].split('/');
               var currDate=curr[1]+'-'+curr[0]+'-'+"20"+curr[2];
               this.date[ele]=currDate;
            }
           this.countryConfirmed=Object.values(Object.values(data_country)[0]);
           this.countryDeaths=Object.values(Object.values(data_country)[1]);
           this.countryRecovered=Object.values(Object.values(data_country)[2]);
          //  console.log(this.countryConfirmed)
        })
  }


  getCountryData()
  {
    this.show=true;
    var vacData;
    var country_clicked=this.countriesData.filter(ele=>ele.country==this.val)[0];
    this.countryService.getCountryVaccineData(this.val).subscribe(
      data=>
      {
        console.log(data.timeline)
        vacData=Object.values(data.timeline).pop();
        this.countrySpecific=this.setCardData(country_clicked,vacData,this.val);
        this.makeChartData(this.val);
      }
    )
    // this.show=false;
  }

}



