import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html' ,
	styleUrls:['app/heroes.component.css'],
directives: [HeroDetailComponent]	
	})

 
 export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private _heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  
  public onSelect(hero) {
  this.selectedHero = hero;
  } 
}


