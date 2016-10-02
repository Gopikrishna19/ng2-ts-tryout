import {HeroService} from '../services/hero.service';
import {IHero} from '../types/IHero';
import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  styleUrls: ['hero-detail.component.css'],
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input()
  private hero: IHero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  private goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
