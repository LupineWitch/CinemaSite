import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  errorMessage: string = "";
  newMovie: Movie;
  @Input() moviesList: Movie[];
  @Output() addNewMovie: EventEmitter<Movie> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: Movie): void {
    if(this.moviesList.find(x => x.title === formValues.title && x.duration == formValues.duration)){
      this.errorMessage = "Film już istnieje w bazie, proszę wprowadzić inne dane!"
      return;
    }
    if(formValues.title.length<2) return;
    if(formValues.duration < 1) {
      this.errorMessage = "Film nie może trwać krócej niż 1 minuta!"
      return;
    }
    this.errorMessage = "";
    this.newMovie = formValues;
    this.addNewMovie.emit(this.newMovie);
  }
}
