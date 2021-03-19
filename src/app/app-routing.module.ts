import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IndiaComponent } from './components/india/india.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { GlobalComponent } from './components/global/global.component';

const routes:Routes=[
  {path:'',component:IndiaComponent},
  {path:'all',component:GlobalComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports:[RouterModule]
})
export class AppRoutingModule { }
