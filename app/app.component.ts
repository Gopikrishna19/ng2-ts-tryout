import {IHero} from './types/IHero';
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
      <label>id: </label>{{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
`
})
export class AppComponent {
  private hero: IHero = {
    id: 1,
    name: 'Windstorm'
  };
  private title = 'Tour of Heroes';
}
