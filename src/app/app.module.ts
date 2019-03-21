import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component'
import { NavComponent } from './nav/nav.component';
import { CityThumbnailComponent } from './city-thumbnail/city-thumbnail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {CityDataService} from './shared/city-data.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  { path: 'cities', component: CityListComponent },
  { path: 'cities/:id', component: CityDetailComponent },
  { path: '', redirectTo: 'cities', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    NavComponent,
    CityDetailComponent,
    CityThumbnailComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [CityDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
