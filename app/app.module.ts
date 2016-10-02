import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {DashboardComponent} from './components/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroesComponent} from './components/heroes.component';
import {HeroService} from './services/hero.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    HeroService
  ]
})
export class AppModule {
}
