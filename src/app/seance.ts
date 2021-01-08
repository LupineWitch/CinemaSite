import { Time } from '@angular/common';
import { Movie } from './movie';
import {Room} from './room';

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

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;

  }

  public set date(value:Date)
  {
    this._date = value;
  }

  public get date() : Date
  {
    return this._date;
  }

  public set hour(value:Time)
  {
    this._hour = value;
  }

  public get hour() : Time
  {
    return this._hour;
  }

  public set movie(value:Movie)
  {
    this._movie = value;
  }

  public get movie() : Movie
  {
    return this._movie;
  }

  public set room(value:Room)
  {
    this._room = value;
  }

  public get room() : Room
  {
    return this._room;
  }

}
