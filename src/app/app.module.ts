import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';


import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { AboutComponent } from './components/about/about.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ErrorComponent } from './components/error/error.component';
import { UpNavComponent } from './components/navigation/up-nav/up-nav.component';


import {MatIconModule} from '@angular/material/icon';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [
    ContactComponent,
    PriceListComponent,
    HomeComponent,
    AboutComponent,
    AppComponent,
    NavigationComponent,
    ErrorComponent,
    UpNavComponent,

    // angular material

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
