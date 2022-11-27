(() => {
  // 数组满足里面内容的类型, 不限位置
  let arr: (string | number | boolean)[] = ['123', 123, true];
  arr[0] = true;


  // 元组是用来解决这个问题的
  // 可以更改里面限定好具体位置的值, 但是不能更改他们的类型
  let tuple: [string, number, boolean] = ['1', 1, true];
  tuple[0] = 'false';
})()