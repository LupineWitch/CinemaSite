import { Time } from '@angular/common';
import { Movie } from './movie';
import { Room } from './room';

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

  public get occupiedSeats(): number[] {
    return this._occupiedSeats;
  }
  public set occupiedSeats(value: number[]) {
    this._occupiedSeats = value;
  }
  public get availableCount(): number {
    return this._availableCount;
  }
  public set availableCount(value: number) {
    this._availableCount = value;
  }
  public get soldCount(): number {
    return this._soldCount;
  }
  public set soldCount(value: number) {
    this._soldCount = value;
  }
  public get room(): Room {
    return this._room;
  }
  public set room(value: Room) {
    this._room = value;
  }
  public get movie(): Movie {
    return this._movie;
  }
  public set movie(value: Movie) {
    this._movie = value;
  }
  public get hour(): Time {
    return this._hour;
  }
  public set hour(value: Time) {
    this._hour = value;
  }
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
