import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    // styles: [`
    // `],
    styleUrls: ['app/heroes.component.css'],
    // template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label>{{hero.name}}</div>'
    // template: `
    // <h2>My Heroes</h2>
    // <ul class="heroes" *ngIf="heroes">
    //     <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
    //         <span class="badge">{{hero.id}}</span> {{hero.name}}
    //     </li>
    // </ul>
    // <div *ngIf="selectedHero">
    //     <h2>
    //         {{selectedHero.name | uppercase}} is my hero
    //     </h2>
    //     <button (click)="gotoDetail()">View Details</button>
    // </div>
    // `,
    templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    heroes: Hero[];
    selectedHero: Hero;


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        if (this.selectedHero.id == 18) {
            this.selectedHero = null;
        }
    }

    getHeroes(): void {
        this.heroes = null;
        this.heroService.getHeroesAsync()
            .then(result => this.heroes = result);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }
}