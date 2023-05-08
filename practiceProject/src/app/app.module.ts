import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Democomponent } from './demoCom/demoCom.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { Testcomponent1Component } from './testcomponent1/testcomponent1.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildCardComponent } from './child-card/child-card.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    Democomponent,
    TestcomponentComponent,
    Testcomponent1Component,
    DatabindingComponent,
    ParentComponent,
    ChildComponent,
    ChildCardComponent,
    NgforComponent
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
