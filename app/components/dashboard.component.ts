import {HeroService} from '../services/hero.service';
import {IHero} from '../types/IHero';
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  private ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  private gotoDetail(hero: IHero): void {
    // not yet implemented
  }
}
