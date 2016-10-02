import {IHero} from '../types/IHero';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  public search(term: string): Observable<IHero> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r: Response) => r.json().data as IHero[]);
  }
}
