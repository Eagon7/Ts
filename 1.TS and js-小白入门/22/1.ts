(() => {
  type userType = {
    name: string;
    age: number;
    sex?: string | number
  }
  let addUser = (user: userType): void => {
    console.log('添加用户');
  }
  addUser({ name: '123', age: 123 })

  // 类型定义相同
  let updateUser = (user: userType): void => {
    console.log('更新用户');
  }
  updateUser({ name: '123', age: 123 })
})()