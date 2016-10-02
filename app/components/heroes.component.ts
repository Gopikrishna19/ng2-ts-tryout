import {HeroService} from '../services/hero.service';
import {IHero} from '../types/IHero';
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['heroes.component.css'],
  templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private selectedHero: IHero;
  private heroes: IHero[];

  constructor(private heroService: HeroService) {

  }

  private ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  private onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
