import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { AppService } from '../app.service';

@Component({
  selector: 'app-rooms-component',
  templateUrl: './rooms-component.component.html',
  styleUrls: ['./rooms-component.component.css'],
})
export class RoomsComponentComponent implements OnInit {
  roomsList: Room[];
  selectedRoom: Room = null;
  selected = false;
  newRoom = Room;
  show = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getRooms().subscribe((rooms: Room[]) => {
      this.roomsList = rooms;
      console.log(rooms);
    });
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

  add(room: Room): void {
    this.roomsList.push(room);
    this.appService.addRoom(room).subscribe((x) => console.log(x));
  }

  delete(which: number): void {
    console.log('which' + which);
    let idx = this.roomsList.findIndex((x) => x.nr == which);
    console.log('idx' + idx);
    this.roomsList.splice(idx, 1);
    this.appService.deleteRoom(which).subscribe((x) => console.log(x));
  }

  edit(room: Room): void {
    this.appService.editRoom(room.nr,room).subscribe((x) => console.log(x));
  }

  showEditForm(): void {
    this.show = true;
  }
}
