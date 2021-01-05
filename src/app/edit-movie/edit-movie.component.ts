import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  @Input() moviesList: Movie[];
  @Input() selected: Movie;
  @Output() selectMovie: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: Movie): void {
    if(formValues.title.length<2) return;
    if(formValues.duration < 1) return;
    let idx = this.moviesList.findIndex(x => x.id == this.selected.id);
    formValues.id = this.selected.id;
    this.moviesList[idx] = formValues;
    this.selectMovie.emit(null);
  }
}
