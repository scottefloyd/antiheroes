import { Component, OnInit, Input } from '@angular/core';
import { AntiHero } from '../anti-hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AntiService } from '../anti.service';

@Component({
  selector: 'app-anti-detail',
  templateUrl: './anti-detail.component.html',
  styleUrls: ['./anti-detail.component.css']
})
export class AntiDetailComponent implements OnInit {

  @Input() antihero: AntiHero;

  constructor(
    private route: ActivatedRoute,
    private antiService: AntiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAntiHero();
  }

  getAntiHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.antiService.getAntiHero(id)
      .subscribe(antihero => this.antihero = antihero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.antiService.updateAntiHero(this.antihero)
      .subscribe(() => this.goBack());
  }

}
