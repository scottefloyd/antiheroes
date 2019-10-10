import { Component, OnInit } from '@angular/core';
import { AntiHero } from '../anti-hero';
import { AntiService } from '../anti.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  antiheroes: AntiHero[];

  constructor(private antiService: AntiService) { }

  ngOnInit() {
    this.getAntiHeroes();
  }

  getAntiHeroes(): void {
    this.antiService.getAntiHeroes()
      .subscribe(antiheroes => this.antiheroes = antiheroes.slice(1, 5));
  }

}
