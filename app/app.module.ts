import {AppComponent} from './app.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroService} from './services/hero.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService
  ]
})
export class AppModule {
}
