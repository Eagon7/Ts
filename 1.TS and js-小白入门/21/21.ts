(() => {
  function sum(a: number, b: number) {
    return `结果${a + b}`
  }
  let a: string = sum(1, 2) as unknown as string;
  let b: string = sum(3, 4)
  console.log(a, b);

  function log(): void {
    console.log('Houdun');
  }
  let fn = (): void => console.log(123);

})()