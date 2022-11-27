(() => {
  // 断言
  function hd(arg: boolean) {
    return arg ? '我就干' : '哪算了'
  }

  let res = hd(true) as '123';
  console.log(res);

  let a: '向军' | 'Eagon';
  // a = '123' 不对
  a = "Eagon"

})()