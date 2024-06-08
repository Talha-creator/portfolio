import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
featuresList :any[]= []

constructor()
{
  this.featuresList.push(
    {img:'../../../assets/images/angular.png', label:'Built with Angular 17', description:'Now cartzilla is available in Angular 17 with developer friendly code.'},
    {img:'../../../assets/images/02.png', label:'Easy to Customize with Sass', description:'Cartzilla is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.'},
    {img:'../../../assets/images/04.png', label:'Built With Bootstrap 5', description:"Cartzilla is the powerful e-commerce front-end solution based on Bootstrap 5 - the world's most popular responsive, mobile-first front-end component library."},
    
    {img:'../../../assets/images/05.png', label:'40+ Flexible Components', description:'Besides styling all default Bootstrap 5 components Cartzilla introduces lots of new flexible, customizable and reusable elements you can use across the website.'},
    {img:'../../../assets/images/06.png', label:'Mobile Friendly Interface', description:"It's not a surprise that nowadays over 70% of users shop online using their mobile devices. Cartzilla is 100% responsive and optimized for small touch screens."},
    {img:'../../../assets/images/07.png', label:'Google Fonts', description:"Cartzilla uses Google fonts which are free, fast to load and of very high quality. Currently Google fonts library includes 870+ font families to choose from."},
    
    {img:'../../../assets/images/08.png', label:'Touch-enabled Sliders', description:"In the era of touch screens it's important to ensure great user experience on handheld devices, especially when it comes to such frequently used interface component as slider."},
    {img:'../../../assets/images/09.png', label:'Vector Based HD Ready Icons', description:"Cartzilla is equiped with font-based icon pack to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density."},
    {img:'../../../assets/images/12.png', label:'Detailed Documentation', description:"Download package includes links to online documentation. It covers all crucial information about how to get started, customize template and components usage."},
    
    )
}
}
