import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AntiHero } from './anti-hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const antiheroes = [
      { id: 11, name: 'Man with No Name' },
      { id: 12, name: 'Stephen Dedalus' },
      { id: 13, name: 'Holden Caulfield' },
      { id: 14, name: 'Huck Finn' },
      { id: 15, name: 'Othello' },
      { id: 16, name: 'Rosencrantz' },
      { id: 17, name: 'Macbeth' },
      { id: 18, name: 'Hamlet' },
      { id: 19, name: 'Quentin Compson' },
      { id: 20, name: 'Roland Deschain' }
    ];
    return {antiheroes};
  }

  getnId(antiheroes: AntiHero[]): number {
    return antiheroes.length > 0 ? Math.max(...antiheroes.map(anti => anti.id)) + 1 : 11;
  }
}
