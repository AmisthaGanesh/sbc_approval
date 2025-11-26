import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessSearchComponent } from './process-search/process-search.component';
import { SavedSearchComponent } from './saved-search/saved-search.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {path:'',component:SearchComponent,
  children:[
  {path:'process-search',component:ProcessSearchComponent},
  {path:'saved-search',component:SavedSearchComponent},
   { path: '', redirectTo: 'process-search', pathMatch: 'full' }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
