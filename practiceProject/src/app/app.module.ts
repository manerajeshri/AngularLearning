import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Democomponent } from './demoCom/demoCom.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { Testcomponent1Component } from './testcomponent1/testcomponent1.component';

@NgModule({
  declarations: [
    AppComponent,
    Democomponent,
    TestcomponentComponent,
    Testcomponent1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
