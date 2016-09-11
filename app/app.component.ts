import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        <!--<my-heroes></my-heroes>-->
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
    }
}