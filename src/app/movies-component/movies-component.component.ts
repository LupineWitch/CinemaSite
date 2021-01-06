import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies-component',
  templateUrl: './movies-component.component.html',
  styleUrls: ['./movies-component.component.css'],
})
export class MoviesComponentComponent implements OnInit {
  movieList: Movie[];
  selectedMovie: Movie = null;
  selected = false;
  newMovie: Movie;
  show = false;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getMovies().subscribe((movies: Movie[]) => {
      this.movieList = movies;
      console.log(movies);
    });
  }

  onSelect(movie: Movie): void {
    if (movie == null) this.show = false;
    if (!this.selected) {
      this.selectedMovie = movie;
    }
  }

  add(movie: Movie): void {
    let id = this.movieList[this.movieList.length - 1].id + 1;
    movie.id = id;
    this.movieList.push(movie);
  }

  delete(which: number): void {
    let idx = this.movieList.findIndex((x) => x.id == which);
    this.movieList.splice(idx, 1);
  }

  showEditForm(): void {
    this.show = true;
  }
}
