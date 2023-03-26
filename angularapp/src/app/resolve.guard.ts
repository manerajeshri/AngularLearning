import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoService } from './services/demo.service';

@Injectable({
  providedIn: 'root'
})

export class ResolveGuard implements Resolve<any> {

constructor(private demoservice : DemoService){}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.demoservice.getUsers();

    // this.demoservice.products;
  }
  
}
