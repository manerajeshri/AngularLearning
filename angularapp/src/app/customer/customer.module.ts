import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { RouterModule, Routes } from '@angular/router';

// const customerRoutes : Routes = [
//   {path:'',component:CustomerlistComponent}
// ]

@NgModule({
  declarations: [CustomerlistComponent],
  imports: [
    CommonModule,
    RouterModule
    // RouterModule.forChild(customerRoutes)
  ]
})
export class CustomerModule { 
  constructor(){
    console.log(`CustomerModule Called`);
    
  }
}
