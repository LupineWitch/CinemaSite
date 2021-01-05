export class Room {
  constructor(private _nr: number, private _capacity: number) {}

  public get nr(): number {
    return this._nr;
  }

  public set nr(value: number) {
    this._nr = value;
  }

  public get capacity(): number {
    return this._capacity;
  }

  public set capacity(value: number) {
    this._capacity = value;
  }
}
