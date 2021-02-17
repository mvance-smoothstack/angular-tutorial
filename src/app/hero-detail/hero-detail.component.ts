import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //unlike in the tutorial, Hero or undefined must be specified here, possibly because I did the strict thing when creating this workspace
  @Input() hero: Hero | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
