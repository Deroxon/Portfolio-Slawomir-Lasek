import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  constructor(private service: ServiceService){}

  public navList = [
    {url: '/strona_glowna', webLook: 'Strona Główna'},
    {url: '/cennik', webLook: 'Oferta'},
    {url: '/Onas', webLook: 'O nas'},
    {url: '/kontakt', webLook: 'Kontakt'},
  ]

  checkSize(event:any) {
    this.service.onResize(event)
  }

}
