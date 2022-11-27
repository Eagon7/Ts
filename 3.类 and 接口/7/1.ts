// static 静态属性只能通过构造函数来调用

// 构造函数派生出很多孩子  母亲只有一个 孩子有无数个 
// 派生的对象都可以使用
{
  class Axios {
    static site: string = 'houdunren.com';
    static getSite(): string {
      return Axios.site
    }
  }

  class Axios2 extends Axios {
    constructor() {
      super();
    }
  }
  const insctance = new Axios();
  console.log(Axios.getSite);

}