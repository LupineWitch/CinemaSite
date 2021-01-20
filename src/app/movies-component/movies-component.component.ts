import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from '@angular/core';
import { Movie } from '../movie';
import { AppService } from '../app.service';
import { Seance } from '../seance';
import Swal from 'sweetalert2';

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
  seanses: Seance[];
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
    let id;
    if (this.movieList.length == 0) id = 1;
    else id = this.movieList[this.movieList.length - 1].id + 1;
    movie.id = id;
    this.movieList.push(movie);
    this.appService.addMovie(movie).subscribe((x) => console.log(x));
  }

  delete(which: number): void {
    this.appService.getSeanses().subscribe((seansesList: Seance[]) => {
      this.seanses = seansesList;
      console.log(seansesList);
    });
    if (this.seanses.find(x => x.movie.id == which)){
      Swal.fire('Ostrzeżenie!', 'Nie można usunąć filmu, dla którego istnieją seanse', 'warning');
      return;
    }
    let idx = this.movieList.findIndex((x) => x.id == which);
    this.movieList.splice(idx, 1);
    this.appService.deleteMovie(which).subscribe((x) => console.log(x));
  }

  edit(movie: Movie): void {
    console.log('edited movie:' + movie);
    this.appService.editMovie(movie.id, movie).subscribe((x) => console.log(x));
  }

  showEditForm(): void {
    this.show = true;
  }

  hideEditForm(): void {
    this.show = false;
  }
}
