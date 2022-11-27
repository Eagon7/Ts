(() => {
  //枚举 : sex: 1男 2女 0保密  但是数字表示不明确. 这个时候可以使用枚举
  enum SexType {
    BOY, // 0 
    GIRL, // 1
    ACC = 10, //10
    UNKNOWN //11
  }
  let user = {
    name: '后盾人',
    sex: 1
  }

  console.log(SexType.BOY); // 0
  console.log(SexType.GIRL); // 1
  console.log(SexType.UNKNOWN); // 11

})()