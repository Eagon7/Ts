{
  // protect 保护
  // public  公共
  // private 私有的
  class Person {n
    protected name: string;
    public age: number;
    private site: string = 'I"m so bad';
    protected info(): string {
      return `${this.name}'s age is ${this.age} years old,${this.site}`
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