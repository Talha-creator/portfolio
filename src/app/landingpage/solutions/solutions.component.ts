import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
servicesList :string[]=[]
constructor()
{
  this.servicesList.push(
    'Shop Grid / List Layout Options','Multiple Product Page Variations','Complete Order Workflow: Cart + Checkout',
    'Shop Customer Account Pages','Vendor Dashboard for Multi-vendor Marketplaces','Ready for any Content: Fashion, Electronics, Digital (Downloadable) Products, etc.',
    'Blog Pages: Blog Layouts + Single Post','Help Center / Support Pages','Secondary Pages: About, Contacts, 404, etc.','40+ Flexible Components'
  ) 
}
}
