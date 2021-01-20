import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { AppService } from '../app.service';
import { Seance } from '../seance';
import Swal from 'sweetalert2';

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
  seanses: Seance[];
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
    this.show = false;
    this.roomsList.push(room);
    this.appService.addRoom(room).subscribe((x) => console.log(x));
  }

  delete(which: number): void {
    this.appService.getSeanses().subscribe((seansesList: Seance[]) => {
      this.seanses = seansesList;
      console.log(seansesList);
    });
    if (this.seanses.find(x => x.room.nr == which)){
      Swal.fire('Ostrzeżenie!', 'Nie można usunąć sali, w której zaplanowane są seanse', 'warning');
      return;
    }
    this.show = false;
    console.log('which' + which);
    let idx = this.roomsList.findIndex((x) => x.nr == which);
    console.log('idx' + idx);
    this.roomsList.splice(idx, 1);
    this.appService.deleteRoom(which).subscribe((x) => console.log(x));
  }

  edit(room: Room): void {
    this.appService.editRoom(room.nr,room).subscribe((x) => console.log(x));
    this.show = false;
  }

  showEditForm(): void {
    this.show = true;
  }

  hideEditForm(): void {
    this.show = false;
  }
}
