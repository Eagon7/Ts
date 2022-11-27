// 构造函数是:实例对象的时候为对象做初始化数据的
// 
{
  class User {
    constructor(public name: string) {
      this.name = this.initName(name);
    }
    private initName(name: string): string {
      return `${name}-Eagon`
    }
  }

  const hd = new User('Eagon');
}