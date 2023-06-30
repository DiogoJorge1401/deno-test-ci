export class Math {
  constructor(private a: number, private b: number) {}

  sum() {
    return this.a + this.b;
  }
  sub() {
    return this.a - this.b;
  }
}
