import { Component,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-herobanner',
  templateUrl: './herobanner.component.html',
  styleUrls: ['./herobanner.component.scss']
})
export class HerobannerComponent {
  @Output() signalItem = new EventEmitter<string>();
  constructor()
  {
  }
  sendSignal()
  {
    this.signalItem.emit('true')
  }
}
