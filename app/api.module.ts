import {InMemoryDataService} from './services/in-memory-data.service';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ]
})
export class ApiModule {}
