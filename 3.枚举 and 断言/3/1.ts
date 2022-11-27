//as const 断言 
// as const 根据具体的值来提取类型
let a: string = 'houdunren.com'; // 限定变量类型

// let b: 'Eagon' = 'Eagon'; // 限定值类型
// b = 'Eagon';

const c = 'Eagon'; // let限定值类型=== const


let b = 'Eagon' as const; //as const 后这个值就不可以再变了
let d = 123 as const;
const arr = [a, d, 1, true] as const; // 转换成元组 第一个值是String 第二个值是123

const obj = {
  name: b
} as const