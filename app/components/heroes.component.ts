import {HeroService} from '../services/hero.service';
import {IHero} from '../types/IHero';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  styleUrls: ['heroes.component.css'],
  templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private selectedHero: IHero;
  private heroes: IHero[];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  public add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  public onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  public gotoDetail(): void {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  private getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
