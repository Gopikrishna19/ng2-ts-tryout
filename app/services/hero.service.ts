import {IHero} from '../types/IHero';
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = '/app/heroes';

  constructor(private http: Http) {}

  public create(name: string): Promise<IHero> {
    return this.http.post(this.url, JSON.stringify({name}), {headers: this.headers})
      .toPromise()
      .then(
        response => response.json().data as IHero,
        this.handleError
      );
  }

  public delete(id: number) {
    const url = `${this.url}/${id}`;

    return this.http.delete(url)
      .toPromise()
      .then(
        () => null,
        this.handleError
      );
  }

  public getHeroes(): Promise<IHero[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(
        response => response.json().data as IHero[],
        this.handleError
      );
  }

  public  getHero(id: number): Promise<IHero> {
    const url = `${this.url}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(
        response => response.json().data as IHero[],
        this.handleError
      );
  }

  public update(hero: IHero): Promise<IHero> {
    const url = `${this.url}/${hero.id}`;

    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(
        () => hero,
        this.handleError
      );
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
