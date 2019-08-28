import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HierarchyComponent,
    NavbarComponent,
    CountrySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
