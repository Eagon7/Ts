(() => {
  // function sum(...args: number[]): number {
  //   args.reduce((s, n) => s + n);

  //   return 3
  // }
  // sum(1, 2, 3, 4)

  function push(arr: any[], ...args: any[]): any[] {
    // tip : return arr.push(...args)  返回结果是push完数组的长度
    // 我们需要返回一个Any类型的数组 所以需要直接返回数组
    arr.push(...args)
    return arr
  }
  let hd: any[] = ['houdun']
  push(hd, 123)
})()