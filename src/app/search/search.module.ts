import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ProcessSearchComponent } from './process-search/process-search.component';
import { SavedSearchComponent } from './saved-search/saved-search.component';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    SearchComponent,
    ProcessSearchComponent,
    SavedSearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,

  ]
})
export class SearchModule { }
