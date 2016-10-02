import {IHero} from '../types/IHero';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private url = '/app/heroes';

  constructor(private http: Http) {}

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

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
