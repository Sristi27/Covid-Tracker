import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndiaComponent } from './components/india/india.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { GlobalComponent } from './components/global/global.component';
import { AppRoutingModule } from './app-routing.module';
import { StateComponent } from './components/state/state.component';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndiaComponent,
    DataCardComponent,
    GlobalComponent,
    StateComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, BrowserAnimationsModule,
    MatCardModule,MatButtonModule,MatGridListModule,
    MatSelectModule,FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatInputModule,MatToolbarModule,
    MatProgressSpinnerModule, AppRoutingModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
