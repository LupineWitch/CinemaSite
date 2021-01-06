import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies', component: MoviesComponentComponent },
  { path: 'rooms', component: RoomsComponentComponent },
  { path: 'seanses', component: SeansesComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

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
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
