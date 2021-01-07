import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Seance} from '../seance';
import {Movie} from '../movie';
import { AppService } from '../app.service';
import { Room} from '../room';


@Component({
  selector: 'app-add-screening',
  templateUrl: './add-screening.component.html',
  styleUrls: ['./add-screening.component.css']
})
export class AddScreeningComponent implements OnInit {
  errorMessage: string = "";
  selectedMovie:Movie;
  selectedRoom:Room;
  newScreening: Seance;
  movieList: Movie[];
  roomList:Room[];
  @Input() ScreeningsList: Seance[];
  @Output() addNewScreening: EventEmitter<Seance> = new EventEmitter()


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
   // console.log(formValues.movie);
  //  console.log(formValues.room);

    if(this.ScreeningsList.find(x => x.movie == formValues.movie && x.room == formValues.room)){
      this.errorMessage = "Seans już istnieje w bazie, proszę wprowadzić inne dane!"
      return;
    }
    this.errorMessage = "";
    this.newScreening = formValues;
   // console.log(this.newScreening);
    this.addNewScreening.emit(this.newScreening);
  }

}
