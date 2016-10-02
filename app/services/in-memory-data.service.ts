import {HEROES} from '../data/heroes';
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  public createDb() {
    return {heroes: HEROES};
  }
}
