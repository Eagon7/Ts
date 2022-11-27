(() => {
  let hd: null = null;
  let xj: undefined = undefined;
  console.log(hd, xj);

  //多用在返回值
  function get(): null | void | string | boolean {
    return true
  }

  // void
  let a: void = undefined;

  let hdren: string = '123';

  console.log(hdren);

})()