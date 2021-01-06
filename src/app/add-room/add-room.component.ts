import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  errorMessage: string = "";
  newRoom: Room;
  @Input() list: Room[];
  @Output() addNewRoom: EventEmitter<Room> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  verifyData(formValues: Room): void {
    if (formValues.nr < 0) {
      this.errorMessage = "Numer sali nie może być ujemny!"
      return;}
    if (this.list.find(x => x.nr == formValues.nr)) {
      this.errorMessage = "Numer sali jest już zajęty!"
      return;
    }
    if (formValues.capacity < 10) {
      this.errorMessage = "Pojemność nie może być mniejsza niż 10!"
      return;
    }
    this.errorMessage="";
    this.newRoom = formValues;
    this.addNewRoom.emit(this.newRoom);
  }
}
