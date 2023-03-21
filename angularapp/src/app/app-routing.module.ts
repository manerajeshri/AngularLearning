import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminlistComponent } from './admin/adminlist/adminlist.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { DemopostComponent } from './demopost/demopost.component';
import { Demopost1Component } from './demopost1/demopost1.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { Demopostdetails1Component } from './demopostdetails1/demopostdetails1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderModule } from './order/order.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
{path : '', redirectTo : 'home', pathMatch:'full'},
{path: 'home', component : HomeComponent},
{path: 'aboutus', component : AboutusComponent}, // will load ==> http://localhost:4200/aboutus
// i.e is when aboutus matches it will go to AboutusComponent
{path: 'contactus', component : ContactusComponent},
// {path : 'product', component: ProductComponent},
//  togive children inside product as parent
// {path : 'product', // for normal working product load on new tab
{path : 'product', canActivate :[AuthGuard] , component : ProductComponent,
children:[
  // {path:'', component : ProductComponent}, // for normal working product load on new tab
  {path : 'laptop', component:LaptopComponent}, // also we can have multiple routing like this {path : 'laptop', component:LaptopComponent,outlet:'products'},
  {path : 'mobile', component:MobileComponent},
  {path : 'watch', component:WatchComponent},
  {path : 'camera', component:CameraComponent}
]
},
{path: 'post',component:DemopostComponent},
{path:'postdetails/:id',component:DemopostdetailsComponent}, // adding new object to display
{path: 'post1',component:Demopost1Component},
{path:'postdetails1/:id1',component:Demopostdetails1Component},
{path:'userdetails', component:UserdetailsComponent},
// {path:'login', component:TemplateformComponent},
{path:'login', component: LoginComponent}, // for auth login form
{path:'order', component:OrderModule},
// {path:'customer', component:CustomerlistComponent},
// {path:'admin', component:AdminlistComponent},

// lazy loading
{path: 'customer', loadChildren:'./customer/customer.module#CustomerModule' },
{path:'admin', loadChildren:'./admin/admin.module#AdminModule'},

{path : 'todo', component : TodoComponent},
{path : '**', component:PagenotfoundComponent} // Wild card rought ==> Always right at Last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
