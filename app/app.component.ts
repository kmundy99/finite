

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
    selector: 'my-app',
    template: `  
<h1>{{title}}</h1>
	<a [routerLink]="['Dashboard']">Dashboard</a>
	<a [routerLink]="['Heroes']">Integrations</a>
	 <router-outlet></router-outlet>
	`,
	providers: [ROUTER_PROVIDERS, HeroService],
directives: [ROUTER_DIRECTIVES]	
	})


@RouteConfig([{
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
	},{
	path: '/heroes',
	name: 'Heroes',
	component: HeroesComponent
	} ,
	{
	path: '/hero-detail/:id',
	name: 'HeroDetail',
	component: HeroDetailComponent}
	])


 
 export class AppComponent{
  title = 'Integrations';
  }
  