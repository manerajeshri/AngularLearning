import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';


const routes: Routes = [
{path : '', redirectTo : 'home', pathMatch:'full'},
{path: 'home', component : HomeComponent},
{path: 'aboutus', component : AboutusComponent}, // will load ==> http://localhost:4200/aboutus
// i.e is when aboutus matches it will go to AboutusComponent
{path: 'contactus', component : ContactusComponent},
// {path : 'product', component: ProductComponent},
//  togive children inside product as parent
// {path : 'product', // for normal working product load on new tab
{path : 'product',component : ProductComponent,
children:[
  // {path:'', component : ProductComponent}, // for normal working product load on new tab
  {path : 'laptop', component:LaptopComponent},
  {path : 'mobile', component:MobileComponent},
  {path : 'watch', component:WatchComponent},
  {path : 'camera', component:CameraComponent}
]
},
{path : '**', component:PagenotfoundComponent} // Wild card rought ==> Always right at Last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
