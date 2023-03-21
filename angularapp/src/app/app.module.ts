import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // used for routing
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
// import { CustomDirective } from './custom.directive';
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
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { Demopost1Component } from './demopost1/demopost1.component';
import { Demopostdetails1Component } from './demopostdetails1/demopostdetails1.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './product/product.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { TodoComponent } from './todo/todo.component';
import { HooksComponent } from './hooks/hooks.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [ // component, directive , pipe
    AppComponent,
    DemoComponent,
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgClassComponent,
    // CustomDirective,
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
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    Demopost1Component,
    Demopostdetails1Component,
    UserdetailsComponent,
    OrderlistComponent,
    TodoComponent,
    HooksComponent,
    LoginComponent,
    
    
    
  ],
  imports: [ // any third party module
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
    HttpClientModule,
    ProductModule,
    
    
  ],
  providers: [], // register service in provider 
  bootstrap: [AppComponent] // define root component
})
export class AppModule {
  log
 }
