import {HeroService} from '../services/hero.service';
import {IHero} from '../types/IHero';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private heroes: IHero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  private ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  private gotoDetail(hero: IHero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
