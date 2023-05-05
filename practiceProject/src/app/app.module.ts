import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Democomponent } from './demoCom/demoCom.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { Testcomponent1Component } from './testcomponent1/testcomponent1.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Democomponent,
    TestcomponentComponent,
    Testcomponent1Component,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for two way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
