import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerobannerComponent } from './landingpage/herobanner/herobanner.component';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { FitnessApplicationComponent } from './fitness-application/fitness-application.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
  // {path:'',component:FitnessApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
