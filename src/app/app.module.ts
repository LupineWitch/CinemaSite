import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SeansesComponentComponent } from './seanses-component/seanses-component.component';
import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { RoomsComponentComponent } from './rooms-component/rooms-component.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';


@NgModule({
  declarations: [
    AppComponent,
    SeansesComponentComponent,
    MoviesComponentComponent,
    RoomsComponentComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    EditMovieComponent,
    AddRoomComponent,
    EditRoomComponent,
    DeleteRoomComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
