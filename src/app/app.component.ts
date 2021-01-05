import { Component } from '@angular/core';
import * as data from './Data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CinemaApp';

  ngOnInit() {
    console.log("Hello world!");
    //TODO: add reading from json file
  }
}
