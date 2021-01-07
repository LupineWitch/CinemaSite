import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Seance} from '../seance';


@Component({
  selector: 'app-delete-screening',
  templateUrl: './delete-screening.component.html',
  styleUrls: ['./delete-screening.component.css']
})
export class DeleteScreeningComponent implements OnInit {
  @Input() selected: Seance;
  @Output() deleteScreening  : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    console.log(this.selected);
    this.deleteScreening.emit(this.selected.id);
  }

}
