import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Room } from './room';
import { Seance } from './seance';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getMovies() {
    return this.http.get(this.rootURL + '/movies');
  }

  addMovie(newMovie: Movie) {
    return this.http.post(this.rootURL + '/movies', newMovie);
  }

  deleteMovie(id: number) {
    return this.http.delete(this.rootURL + '/movies/' + id);
  }

  editMovie(id: number, editedMovie: Movie){
    return this.http.put(this.rootURL + '/movies/' + id, editedMovie);
  }

  getRooms() {
    return this.http.get(this.rootURL + '/rooms');
  }

  addRoom(newRoom: Room) {
    return this.http.post(this.rootURL + '/rooms', newRoom);
  }

  deleteRoom(nr: number) {
    return this.http.delete(this.rootURL + '/rooms/' + nr);
  }

  editRoom(nr: number, editedRoom: Room){
    return this.http.put(this.rootURL + '/rooms/' + nr, editedRoom);
  }

  getSeanses() {
    return this.http.get(this.rootURL + '/seanses');
  }
  addScreening(newScreening:Seance)
  {
    return this.http.post(this.rootURL + '/seanses', newScreening);

  }

  deleteScreening(nr:number)
  {
    return this.http.delete(this.rootURL + '/seanses/' + nr);
  }

  editScreening(id:number, editedScreening:Seance)
  {
    return this.http.put(this.rootURL +'/seanses/'+ id, editedScreening);
  }
}
