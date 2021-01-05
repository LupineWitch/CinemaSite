import { Time } from '@angular/common';
import { Movie } from './movie';

export class Seance {
  constructor(
    private _id: number,
    private _date: Date,
    private _hour: Time,
    private _movie: Movie,
    private _room: Room,
    private _soldCount: number,
    private _availableCount: number,
    private _occupiedSeats: number[]
  ) {}
}
