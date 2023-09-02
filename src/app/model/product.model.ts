export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public genre?: string,
    public info?: string,
    public img?: string[],
    public stock?: number,
    public price?: number,
  ) {}
}
