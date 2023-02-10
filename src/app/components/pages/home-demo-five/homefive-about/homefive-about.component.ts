// import { Component, OnInit } from '@angular/core';

import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-homefive-about',
  templateUrl: './homefive-about.component.html',
  styleUrls: ['./homefive-about.component.scss']
})
export class HomefiveAboutComponent {

  constructor(
    private scroller: ViewportScroller
  ) { 
    
  }

  ngOnInit(): void {
  }

  goDown1() {
    this.scroller.scrollToAnchor("about");
  }

}
