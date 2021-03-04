import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country-wise/country.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor(private countryService:CountryService) { }

  countryData;
  countries=[];
  countrySpecific;
  globalTotal;
  val;

  ngOnInit(): void {
    

    this.countryService.getGlobal().subscribe(
      data=>this.globalTotal=data
    )


     this.countryService.getAllCountries().subscribe(
       data=>
       {
        //  console.log(data)
         this.countryData=data;
         data.forEach(ele => {
           this.countries.push(ele.country)
         });
        //  console.log(this.countries)
       }
     )
  }


  getCountryData(country:string)
  {
    // console.log(this.val)
    //find returns first occurence
    //filter returns an array
    console.log(this.countryData)
    this.countrySpecific=this.countryData.filter(ele=>ele.country==this.val)[0];
    console.log(this.countrySpecific)
  }

}
