import {Component, Input, OnInit} from 'angular2/core';
import {Hero, IntegrationSteps} from './hero';
import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';
import {NgForm} from 'angular2/common';

@Component({
selector: 'hero-detail',
templateUrl: 'app/hero-detail.component.html',
styleUrls:['app/hero-detail.component.css']
)

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  @Input() steps: IntegrationSteps;
  showDetails: number;


  
  constructor(private _heroService: HeroService,
  private _routeParams: RouteParams) {
	}
  
  ngOnInit() {
  let id = +this._routeParams.get('id');
  this._heroService.getHero(id).then(hero => this.hero = hero);
  this._heroService.getSteps(id).then(steps => this.steps = steps);
  this.stepType = ["Rest API", "Excel"];
  }
  
  goBack() {
  window.history.back();}
  
  moreDetails() {
  this.showDetails = 1;
  console.log(this.showDetails);
  }
  
  get diagnostic() {
  return JSON.stringify(this.steps);}
  
}