import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})  //export keyword important so that the component can be imported elsewhere
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  /* done in part 1
  hero: Hero = {
    id: 1, name: 'Windstorm'
  };
  */

  selectedHero?: Hero;
  onSelect(passedInHero: Hero): void {
    this.selectedHero = passedInHero;
  }

  constructor() { }

  ngOnInit(): void {
    //lifecycle hook, called when Angular makes a new instance of this component
  }

}
