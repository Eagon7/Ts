(() => {
  function hd() {
    let a = 'houdunren.com';
    let b = (x: number, y: number): number => x + y;
    return [a, b]
  }

  const [n, m] = hd() as [string, (x: number, y: number) => number]
  // m(1, 2)  string 没有调用签名权限
  // let result = (m as Function)(1, 2)  result是any类型
  // let result = (m as (x: number, y: number) => number)(1, 2)  添加具体类型
  let result = m(1, 2);
  console.log(result);

})()