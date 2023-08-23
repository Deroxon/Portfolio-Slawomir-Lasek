import { Component } from '@angular/core';
import { UpNav } from 'src/app/interfaces/up-nav';

@Component({
  selector: 'app-up-nav',
  templateUrl: './up-nav.component.html',
  styleUrls: ['./up-nav.component.css']
})
export class UpNavComponent {

  upNavLi: UpNav[] = [
    {icon: 'phone', text: '+48 606-940-352'},
    {icon: 'location_on', text: 'Prusice 55-110', extraText: 'Górkowicka 16a'}
  ]

}
