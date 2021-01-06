import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  newRoom: Room;
  @Input() list: Room[];
  @Output() addNewRoom: EventEmitter<Room> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  verifyData(formValues: Room): void {
    //TODO: id bugged - if movie with the same name
    if (formValues.nr < 0) return;
    if (this.list.find(x => x.nr == formValues.nr)) return; //TODO: nr must be unique
    if (formValues.capacity < 10) return;
    this.newRoom = formValues;
    this.addNewRoom.emit(this.newRoom);
  }
}
