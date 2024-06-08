import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {FormsModule}   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerobannerComponent } from './landingpage/herobanner/herobanner.component';
import { DemosComponent } from './landingpage/demos/demos.component';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { SolutionsComponent } from './landingpage/solutions/solutions.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { FeaturesComponent } from './landingpage/features/features.component';
import { MobileresponsiveComponent } from './landingpage/mobileresponsive/mobileresponsive.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FitnessApplicationComponent } from './fitness-application/fitness-application.component';
import { OurteamComponent } from './fitness-application/ourteam/ourteam.component';
import { HerobannerFitnessComponent } from './fitness-application/herobanner-fitness/herobanner-fitness.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    AppComponent,
    HerobannerComponent,
    DemosComponent,
    LandingpageComponent,
    SolutionsComponent,
    FooterComponent,
    FeaturesComponent,
    MobileresponsiveComponent,
    HeaderComponent,
    FitnessApplicationComponent,
    OurteamComponent,
    HerobannerFitnessComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    CKEditorModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
