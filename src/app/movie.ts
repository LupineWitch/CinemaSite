export class Movie {
  //duration in minutes
  constructor(
    private _id: number,
    private _title: string,
    private _duration: number
  ) {}

  public get duration(): number {
    return this._duration;
  }

  public set duration(value: number) {
    this._duration = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }
}
