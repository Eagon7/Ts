{
  // 
  class User {
    name: string;
    age: number;
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
    info(): String {
      return `${this.name}'s age is ${this.age} years old `
    }
  }
  const hd = new User('Eagon', 2);
  const xj = new User('XJ', 22);
  console.log(hd.info());
  const users: User[] = [];
  users.push(hd, xj)
  console.log(users);

}