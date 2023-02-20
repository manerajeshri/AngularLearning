import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { FormsModule } from '@angular/forms';
import { CountryStateComponent } from './country-state/country-state.component';
import { DirectiveProjectComponent } from './directive-project/directive-project.component';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//from angular material adding modules
import {MatButtonToggleModule} from '@angular/material/button-toggle';
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
import { TempformDomainComponent } from './tempform-domain/tempform-domain.component';
import { TempltRegristrationFormComponent } from './templt-regristration-form/templt-regristration-form.component';
import {MatChipsModule} from '@angular/material/chips';
import { TempltRegFormComponent } from './templt-reg-form/templt-reg-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildToParentComponent,
    CountryStateComponent,
    DirectiveProjectComponent,
    DirectiveComponent,
    TemplateformComponent,
    TempformDomainComponent,
    TempltRegristrationFormComponent,
    TempltRegFormComponent,
    // adding from angular material
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
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
    MatChipsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
