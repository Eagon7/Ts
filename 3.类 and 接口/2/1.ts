{
  // public 公开 公共 static 静态
  // 属性是对象独有的 ,方法是在原型上的
  class User {
    public name: string;
    public age: number;
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
    public info(): String {
      return `${this.name}'s age is ${this.age} years old `
    }
  }
  const hd = new User('Eagon', 18);
  const gy = new User('耿延', 2);

  for (const key in gy) {
    if (gy.hasOwnProperty(key)) {
      console.log(gy[key]);
    }
  }
  // for (const key in gy) {
  //   if (Object.hasOwnProperty(key)) {
  //     console.log(hd[key]);
  //   }
  // }
}