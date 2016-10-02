import {HEROES} from '../data/heroes';
import {IHero} from '../types/IHero';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<IHero[]> {
    return Promise.resolve(HEROES);
  }
}
