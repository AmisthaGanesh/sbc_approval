import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiationComponent } from './initiation/initiation.component';
import { MyinboxComponent } from './myinbox/myinbox.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiationComponent,
    MyinboxComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
