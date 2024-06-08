import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.scss'],
  animations:[
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('{{delay}}s ease-in-out', style({ opacity: 1 }))
      ], { params: { delay: 0 } })
    ]),
  ]
  
})
export class OurteamComponent {

}
