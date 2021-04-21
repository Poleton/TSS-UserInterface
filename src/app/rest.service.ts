import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Policy {
  name: string;
  id: string;
  date: string;
}

const endpoint = 'https://ce6c86ca-84fd-42bb-9343-076993ac36fa.mock.pstmn.io';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private http: HttpClient ) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPolicies(): Observable<any> {
    return this.http.get<Policy>(endpoint + 'policies').pipe(
      catchError(this.handleError)
    );
  }

  getPolicy(id: string): Observable<any> {
    return this.http.get<Policy>(endpoint + 'policies/' + id).pipe(
      catchError(this.handleError)
    );
  }

}
