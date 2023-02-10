import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private scroller: ViewportScroller,
        public router: Router
    ) { }

    ngOnInit(): void {}

    goDown1() {
        this.scroller.scrollToAnchor("targetRed");
      }

      goDown3() {
        this.router.navigate([], { fragment: "targetBlue" });
      }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}