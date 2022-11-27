(() => {
  function sum(a: number, b: number, c?: number) {
    console.log(c);
    c = c || 0;
    return a + b + 0
  }
  console.log(sum(1, 2, 3));

})()