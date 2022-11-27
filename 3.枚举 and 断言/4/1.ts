(() => {
  let a = 'houdunren';
  let b = 2030;
  // let hd = [a, b] as const; 等同下边
  let hd = <const>[a, b];
  let f = hd[1];
  f = 89
})()