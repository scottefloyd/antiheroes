import { Component, OnInit } from '@angular/core';
import { AntiHero } from '../anti-hero';
import { ANTIHEROES } from '../mock-antiheroes';

@Component({
  selector: 'app-anti-heroes',
  templateUrl: './anti-heroes.component.html',
  styleUrls: ['./anti-heroes.component.css']
})
export class AntiheroesComponent implements OnInit {

  antiheroes = ANTIHEROES;

  selectedAntiHero: AntiHero;
  onSelect(hero: AntiHero): void {
    this.selectedAntiHero = hero;
  }



  constructor() { }

  ngOnInit() {
  }

}
