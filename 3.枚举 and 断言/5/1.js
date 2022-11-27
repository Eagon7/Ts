(function () {
    function hd() {
        var a = 'houdunren.com';
        var b = function (x, y) { return x + y; };
        return [a, b];
    }
    var _a = hd(), n = _a[0], m = _a[1];
    // m(1, 2)  string 没有调用签名权限
    // let result = (m as Function)(1, 2)  result是any类型
    // let result = (m as (x: number, y: number) => number)(1, 2)  添加具体类型
    var result = m(1, 2);
    console.log(result);
})();
