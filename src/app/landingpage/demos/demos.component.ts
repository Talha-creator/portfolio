import { Component } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent {

  demoItems:any[]=[]
  constructor()
  {
    this.demoItems.push(
      {
        label:'NFT Marketplace', img:'../../../assets/images/08.jpg'
      },
      {
        label:'Fashion Store v.1', img:'../../../assets/images/01.jpg'
      },
      {
        label:'Electronic Store', img:'../../../assets/images/05.jpg'
      },
      {
        label:'Food Delivery Service', img:'../../../assets/images/07.jpg'
      },
      {
        label:'Multi-vendor Marketplace', img:'../../../assets/images/04.jpg'
      },
      {
        label:'Grocery Store', img:'../../../assets/images/06.jpg'
      },
      {
        label:'Fashion Store v.1', img:'../../../assets/images/02.jpg'
      },
      {
        label:'Single Product / Brand Store', img:'../../../assets/images/05.jpg'
      }
    )
  }
}
