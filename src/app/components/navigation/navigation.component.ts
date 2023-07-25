import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public navList = [
    {url: '/strona_glowna', webLook: 'Strona Główna'},
    {url: '/kontakt', webLook: 'Kontakt'},
    {url: '/cennik', webLook: 'Oferta'},
    {url: '/Onas', webLook: 'O nas'}
  ]

}
