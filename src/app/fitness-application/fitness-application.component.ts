import { Component  ,OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-fitness-application',
  templateUrl: './fitness-application.component.html',
  styleUrls: ['./fitness-application.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('{{delay}}s ease-in-out', style({ opacity: 1 }))
      ], { params: { delay: 0 } })
    ]),
    trigger('inOutPaneAnimation', [
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ),
      ]),
    ]),
  ]
})
export class FitnessApplicationComponent implements OnInit {
  textToDisplay = 'Trust the process';
  letters: string[] = [];
  value = 0;
  timer = 0;

  ngOnInit() {
    this.letters = this.textToDisplay.split('');


    setInterval(() => {
      this.timer += 1;
      if (this.timer == 7) {
        this.value = 1;
      
      }
    }, 1000);
  }

}
