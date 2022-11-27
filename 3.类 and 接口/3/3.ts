{
  class Person {
    protected name: string;
    public age: number;
    protected info(): string {
      return `${this.name}'s age is ${this.age} years old,That sex's`
    }
    public show(): string {
      return this.info()
    }
  }
  class User extends Person {
    protected sex: number
    constructor(n: string, a: number) {
      super();
      this.name = n;
      this.age = a;
      this.sex = 1
    }
  }
  const hd = new User('Eagon', 18);
  console.log(hd.show());
}