import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Movie } from '../movie';
import { Seance } from '../seance';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  @Input() selected: Movie;
  @Output() deleteMovie: EventEmitter<number> = new EventEmitter();
  seanses: Seance[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.appService.getSeanses().subscribe((seansesList: Seance[]) => {
      this.seanses = seansesList;
      console.log(seansesList);
    });
    if (this.seanses.find(x => x.movie.id == this.selected.id)){
      Swal.fire('Ostrzeżenie!', 'Nie można usunąć filmu, dla którego istnieją seanse', 'warning');
      return;
    }
    console.log(this.selected);
    this.deleteMovie.emit(this.selected.id);
  }
}
