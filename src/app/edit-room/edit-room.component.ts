import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  @Input() roomsList: Room[];
  @Input() selected: Room;
  @Output() selectRoom: EventEmitter<Room> = new EventEmitter();
  @Output() editRoom: EventEmitter<Room> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verifyData(formValues: Room): void {
    if (formValues.capacity < 10) return;
    let idx = this.roomsList.findIndex(x => x.nr == this.selected.nr);
    formValues.nr = this.roomsList[idx].nr;
    this.roomsList[idx] = formValues;
    this.selectRoom.emit(null);
    this.editRoom.emit(formValues);
  }
}
