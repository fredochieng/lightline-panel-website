// import { Component } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { Component, OnInit } from "@angular/core";

import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;
    constructor(
        private router: Router
    ) {}

    ngOnInit(){
        this.recallJsFuntions();
    }


    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }   

}