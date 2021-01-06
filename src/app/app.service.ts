import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getMovies() {
    return this.http.get(this.rootURL + '/movies');
  }

  getRooms() {
    return this.http.get(this.rootURL + '/rooms');
  }

  getSeanses() {
    return this.http.get(this.rootURL + '/seanses');
  }
}
