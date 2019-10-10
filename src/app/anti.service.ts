import { Injectable } from '@angular/core';
import { AntiHero } from './anti-hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AntiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private antiheroesUrl = 'api/antiheroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getAntiHeroes(): Observable<AntiHero[]> {
    this.messageService.add('AntiService: fetched antiheroes');
    return this.http.get<AntiHero[]>(this.antiheroesUrl)
      .pipe(
        tap(_ => this.log('fetched antiheroes')),
        catchError(this.handleError<AntiHero[]>('getAntiHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAntiHero(id: number): Observable<AntiHero> {
    const url = `${this.antiheroesUrl}/${id}`;
    return this.http.get<AntiHero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<AntiHero>(`getAntiHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  updateAntiHero(antihero: AntiHero): Observable<any> {
    return this.http.put(this.antiheroesUrl, antihero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${antihero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addAntiHero(hero: AntiHero): Observable<AntiHero> {
    return this.http.post<AntiHero>(this.antiheroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: AntiHero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<AntiHero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteAntiHero(id: number): Observable<AntiHero> {
    //const id = typeof antihero === 'number' ? antihero : antihero.id;
    const url = `${this.antiheroesUrl}/${id}`;
    console.log(url);


    return this.http.delete<AntiHero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted antihero id=${id}`)),
      catchError(this.handleError<AntiHero>('deleteAntiHero'))
    );
  }

  searchAntiHeroes(term: string): Observable<AntiHero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<AntiHero[]>(`${this.antiheroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<AntiHero[]>('searchHeroes', []))
    );
  }

}
