import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: 'strona_glowna', pathMatch:'full'},
  {path: 'strona_glowna', component: HomeComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'cennik', component: PriceListComponent},
  {path: 'Onas', component: AboutComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
