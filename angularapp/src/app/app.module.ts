import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// getting from angular material toggle button 
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// adding from angular material : slider
// import {MatSliderModule} from '@angular/material/slider';
import { TemplateformComponent } from './templateform/templateform.component';
// for form
// import {MatCardModule} from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { NgIfSirComponent } from './ng-if-sir/ng-if-sir.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchNamePipe } from './search-name.pipe';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    CustomDirective,
    TemplateformComponent,
    ReactiveformComponent,
    DatabindingComponent,
    NgIfSirComponent,
    PipeexampleComponent,
    CustomPipePipe,
    SearchPipe,
    ProductFilterComponent,
    SearchNamePipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, // for toggle button
    MatSliderModule, // // adding from angular material : slider
    MatCardModule, // for form
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule, 
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
