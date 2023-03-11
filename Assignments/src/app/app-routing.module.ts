import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DairyComponent } from './grocery/dairy/dairy.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HouseholdComponent } from './grocery/household/household.component';
import { PackedFoodComponent } from './grocery/packed-food/packed-food.component';
import { PageNotFoundComponent } from './grocery/page-not-found/page-not-found.component';
import { PersonalCareComponent } from './grocery/personal-care/personal-care.component';
import { SnacksBeveragesComponent } from './grocery/snacks-beverages/snacks-beverages.component';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch:'full'},
{path: 'home', component : HomeComponent},
{path: 'grocery', 
children: [
  {path :'', component:GroceryComponent},
  {path :'dairy', component: DairyComponent},
  {path :'packedFood', component:PackedFoodComponent},
  {path :'snacksBeverages', component: SnacksBeveragesComponent},
  {path :'personalCare', component: PersonalCareComponent},
  {path :'household', component:HouseholdComponent},
]
},
{path : 'users', component: UsersComponent},
{path: 'userdetails/:id', component:UserdetailsComponent},
 {path: '**', component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
