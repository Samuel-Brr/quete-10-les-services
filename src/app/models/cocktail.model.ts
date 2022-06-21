export class Cocktail {

  static cocktails: Cocktail[] = []

  constructor(
    private _name: string,
    private _price: number,
    private _img: string,
  ){
    Cocktail.cocktails.push(this)
  }

  public get img(): string {
    return this._img
  }
  public set img(value: string) {
    this._img = value
  }
  public get price(): number {
    return this._price
  }
  public set price(value: number) {
    this._price = value
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
}
