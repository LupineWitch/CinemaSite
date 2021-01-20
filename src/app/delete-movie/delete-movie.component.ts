import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  @Input() selected: Movie;
  @Output() deleteMovie: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log(this.selected);
    this.deleteMovie.emit(this.selected.id);
  }
}
