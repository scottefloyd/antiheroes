import { Component, OnInit, Input } from '@angular/core';
import { AntiHero } from '../anti-hero';

@Component({
  selector: 'app-anti-detail',
  templateUrl: './anti-detail.component.html',
  styleUrls: ['./anti-detail.component.css']
})
export class AntiDetailComponent implements OnInit {

  @Input() antihero: AntiHero;

  constructor() { }

  ngOnInit() {
  }

}
