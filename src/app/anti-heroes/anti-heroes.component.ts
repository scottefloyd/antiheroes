import { Component, OnInit } from '@angular/core';
import { AntiHero } from '../anti-hero';
import { AntiService } from '../anti.service';

@Component({
  selector: 'app-anti-heroes',
  templateUrl: './anti-heroes.component.html',
  styleUrls: ['./anti-heroes.component.css']
})
export class AntiheroesComponent implements OnInit {

  antiheroes: AntiHero[];

  constructor(private antiService: AntiService) { }

  ngOnInit() {
    this.getAntiHeroes();
  }

  getAntiHeroes(): void {
    this.antiService.getAntiHeroes()
      .subscribe(antiheroes => this.antiheroes = antiheroes);
  }

  add(name: string): void {    
    name = name.trim();
    if (!name) { return; }
    this.antiService.addAntiHero({ name } as AntiHero)
      .subscribe(hero => {
        this.antiheroes.push(hero);
      });
  }

  delete(antihero: AntiHero): void {    
    this.antiService.deleteAntiHero(antihero.id).subscribe();
    this.antiheroes = this.antiheroes.filter(ah => ah !== antihero);

  }
}
