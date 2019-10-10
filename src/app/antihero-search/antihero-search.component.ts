import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { AntiHero } from '../anti-hero';
import { AntiService } from '../anti.service';

@Component({
  selector: 'app-antihero-search',
  templateUrl: './antihero-search.component.html',
  styleUrls: ['./antihero-search.component.css']
})
export class AntiheroSearchComponent implements OnInit {
  antiheroes$: Observable<AntiHero[]>;
  private searchTerms = new Subject<string>();

  constructor(private antiService: AntiService) { }

   // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.antiheroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.antiService.searchAntiHeroes(term)),
    );
  }

}
