import {HEROES, INTEGRATIONSTEPS} from './mock-hero-details';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  
  getHero(id: number) {
  return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);}
  
  getSteps(id: number) {
  return Promise.resolve(INTEGRATIONSTEPS).then(steps => steps.filter(step => step.id ===id)[0]);}
  
  getHeroesSlowly() {
  return new Promise<Hero[]>(resolve =>
    setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
  );
}
   
}



