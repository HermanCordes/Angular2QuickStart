import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }
    getHeroesAsync(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero> {
        //let hero = HEROES.find(h => h.id == id);
        //return Promise.resolve(HEROES.find(h => h.id == id));
        return this.getHeroesAsync()
             .then(heroes => heroes.find(hero => hero.id === id));
    }
}