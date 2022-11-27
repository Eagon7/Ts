(() => {
  // let a: string;
  // a = '123'

  // let hd: (a: number, b: number) => number
  // hd = (file, model): number => { return 123 }
  // hd(1, 1)
  type UserType = {
    name: string, age: number
  }
  type userAddFun = (user: UserType) => boolean;
  let addUser: userAddFun = (u: UserType): boolean => {
    return true
  }

  addUser({ name: 'Eagon', age: 13 });
})()
