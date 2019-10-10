import { Component, OnInit } from '@angular/core';
import { AntiHero } from '../anti-hero';
import { AntiService } from '../anti.service';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-anti-heroes',
  templateUrl: './anti-heroes.component.html',
  styleUrls: ['./anti-heroes.component.css']
})
export class AntiheroesComponent implements OnInit {

  antiheroes: AntiHero[];

  constructor(
    private antiService: AntiService,
    private _message: MessageService) { }

  ngOnInit() {
    this.getAntiHeroes();
  }

  getAntiHeroes(): void {
    this.antiService.getAntiHeroes()
      .subscribe(antiheroes => this.antiheroes = antiheroes);
  }

  add(name: string): void {    
    this._message.add({severity: 'success', summary: `Congrats! you just added ${name} to Antiheros`, detail: ''});
    setTimeout(() => this._message.clear(), 2000);
    name = name.trim();
    if (!name) { return; }
    this.antiService.addAntiHero({ name } as AntiHero)
      .subscribe(hero => {
        this.antiheroes.push(hero);
      });
  }

  delete(antihero: AntiHero): void {    
    this._message.add({severity: 'warn', summary: `Congrats! you just destroyed Antihero ${antihero.name}s from existence`, detail: ''});
    setTimeout(() => this._message.clear(), 2000);
    this.antiService.deleteAntiHero(antihero.id).subscribe();
    this.antiheroes = this.antiheroes.filter(ah => ah !== antihero);

  }
}
