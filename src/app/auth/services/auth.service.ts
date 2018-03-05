import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authenticate } from '../models/authenticate';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class AuthService {

  private API_PATH = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login({ username, password }: Authenticate): Observable<User> {
    if (username !== 'admin' || password !== 'ezguess') {
      return _throw('Invalid username or password');
    }
    return of({ firstName: 'Johnny', lastName: 'Admin', middle: 'A', email: 'johnny@admin.com', emailVerified: true });
  }

  logout() {
    return of(true);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => _throw('Invalid username or password');
  }

}
