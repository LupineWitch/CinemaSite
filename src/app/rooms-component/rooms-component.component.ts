import { Component, OnInit } from '@angular/core';
import * as data from '../Data.json';
import { Room } from '../room';

@Component({
  selector: 'app-rooms-component',
  templateUrl: './rooms-component.component.html',
  styleUrls: ['./rooms-component.component.css']
})
export class RoomsComponentComponent implements OnInit {
  roomsList = data.Rooms;
  selectedRoom: Room = null;
  selected = false;
  newRoom = Room;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(room: Room): void {
    if (!this.selected) {
      this.selectedRoom = room;
    }
  }

  onClick(room: Room): void {
    if (!this.selected) {
      this.selectedRoom = room;
    }
  }
}
