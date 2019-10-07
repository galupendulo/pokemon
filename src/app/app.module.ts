import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { PokemonDetails } from './details.component';
import { ApiService } from './api.service';
import { StatsComponent } from './stats.component';


const routes: Routes = [
  { path: 'details/:id', component: PokemonDetails},
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes), 
  ],
  providers:[ApiService],
  declarations: [ 
    AppComponent, 
    ListComponent,
    PokemonDetails,
    StatsComponent

  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
