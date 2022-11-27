"use strict";
(() => {
    let hd = undefined;
    console.log(hd);
    // void  =  null undefined
    // function run(): string | void {
    //   return '123'
    // }
    // console.log(run());
    // never 函数不会执行到头, 抛出错误便停止 
    function fn() {
        throw new Error('类型错误');
    }
})();
