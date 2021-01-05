import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {
  @Input() selected: Room;
  @Output() deleteRoom: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log(this.selected);
    this.deleteRoom.emit(this.selected.nr);
  }
}
