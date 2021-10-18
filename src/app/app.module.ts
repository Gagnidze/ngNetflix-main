import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MovieComponent } from './shared/movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { ShowCaseComponent } from './show-case/show-case.component';
// import { StoreModule } from '@ngrx/store';
import { DynaSliderComponent } from './dyna-slider/dyna-slider.component';
import { SliderDirective } from './dyna-slider/slider.directive';
import { DetailsComponent } from './shared/details/details.component';
import { RefDirective } from './shared/ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    ShowCaseComponent,
    DynaSliderComponent,
    SliderDirective,
    DetailsComponent,
    RefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
