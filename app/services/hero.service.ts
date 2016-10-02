import {HEROES} from '../data/heroes';
import {IHero} from '../types/IHero';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<IHero[]> {
    return Promise.resolve(HEROES);
  }

  public  getHero(id: number): Promise<IHero> {
    return this.getHeroes()
      .then(heroes =>
        heroes.find(hero => hero.id === id)
      );
  }
}
