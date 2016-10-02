import {HeroSearchService} from '../services/hero-search.service';
import {IHero} from '../types/IHero';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  providers: [HeroSearchService],
  selector: 'hero-search',
  styleUrls: ['hero-search.component.css'],
  templateUrl: 'hero-search.component.html'
})
export class HeroSearchComponent implements OnInit {
  private heroes: Observable<IHero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream.
  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<IHero[]>([]))
      .catch(error => Observable.of<IHero[]>([]));
  }

  public gotoDetail(hero: IHero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
