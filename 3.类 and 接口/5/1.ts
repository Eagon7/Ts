{
  // readonly 是只读属性, 不可更改
  // 构造函数在初始化的时候是可以改变readonly的
  class Axios {
    readonly site: string = 'https://www.houdunren.com/api'
    public constructor(site?: string) {
      this.site = site || this.site
    }
    /**
     * get
     */
    public get(url) {
      console.log(`你请求的是${this.site}/${url}`);
    }
  }
  const instance = new Axios();
  // instance.site = 'axios'  修改报错 因为site是readonly
  instance.get('users');
} 