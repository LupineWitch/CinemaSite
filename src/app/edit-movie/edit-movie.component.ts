import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  errorMessage: string = "";
  @Input() moviesList: Movie[];
  @Input() selected: Movie;
  @Output() selectMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() editMovie: EventEmitter<Movie> = new EventEmitter();

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
    let idx = this.moviesList.findIndex(x => x.id == this.selected.id);
    formValues.id = this.selected.id;
    this.moviesList[idx] = formValues;
    this.selectMovie.emit(null);
    this.editMovie.emit(formValues);
  }
}
