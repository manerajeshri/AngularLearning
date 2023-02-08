import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { FormsModule } from '@angular/forms';
import { CountryStateComponent } from './country-state/country-state.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildToParentComponent,
    CountryStateComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
