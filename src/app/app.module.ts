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


@NgModule({
  declarations: [
    AppComponent,
    SeansesComponentComponent,
    MoviesComponentComponent,
    RoomsComponentComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    EditMovieComponent,

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
