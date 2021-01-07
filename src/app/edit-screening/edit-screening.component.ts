import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Seance} from '../seance';
import {Movie} from '../movie';
import { AppService } from '../app.service';
import { Room} from '../room';

@Component({
  selector: 'app-edit-screening',
  templateUrl: './edit-screening.component.html',
  styleUrls: ['./edit-screening.component.css']
})
export class EditScreeningComponent implements OnInit {
  errorMessage: string = "";
  selectedMovie:Movie;
  selectedRoom:Room;
  movieList: Movie[];
  roomList:Room[];
  @Input() ScreeningsList: Seance[];
  @Input() selected: Seance;
  @Output() selectScreening: EventEmitter<Seance> = new EventEmitter();
  @Output() editScreening: EventEmitter<Seance> = new EventEmitter();


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getMovies().subscribe((movies: Movie[]) => {
      this.movieList = movies;
      console.log(movies);
    });
    this.appService.getSeanses().subscribe((screenings: Seance[]) => {
      this.ScreeningsList = screenings;
      console.log(screenings);
    });
    this.appService.getRooms().subscribe((rooms: Room[]) => {
      this.roomList = rooms;
      console.log(rooms);
    });
  }

  verifyData(formValues: Seance): void {
    this.errorMessage = "";
    let idx = this.ScreeningsList.findIndex(x => x.id == this.selected.id);
    formValues.id = this.selected.id;
    this.ScreeningsList[idx] = formValues;
    this.selectScreening.emit(null);
    this.editScreening.emit(formValues);
  }
}
