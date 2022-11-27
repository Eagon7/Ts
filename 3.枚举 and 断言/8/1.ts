{
  let aLink = document.querySelector('#hd') as HTMLLinkElement;

  class Hd {
    el: HTMLDivElement
    constructor(el: HTMLDivElement) {
      this.el = el;
    }
    html() {
      return this.el.innerHTML
    }
  }

  const el: HTMLDivElement = document.querySelector('.xj')!;
  let obj = new Hd(el);
  console.log(obj.html());

}

