import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiationComponent } from './initiation/initiation.component';
import { MyinboxComponent } from './myinbox/myinbox.component';

const routes: Routes = [
  {path:'',component:InitiationComponent},
  {path:'initiation',component:InitiationComponent},
  { path:'myinbox',component:MyinboxComponent},
 { 
  path: 'search', 
  loadChildren: () => import('./search/search.module').then(m => m.SearchModule) 
}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
