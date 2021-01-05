import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  newMovie: Movie;
  @Output() addNewMovie: EventEmitter<Movie> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: Movie): void {
    //TODO: id bugged - if movie with the same name
    if(formValues.title.length<2) return;
    if(formValues.duration < 1) return;
    this.newMovie = formValues;
    this.addNewMovie.emit(this.newMovie);
  }
}
