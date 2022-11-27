{
    // public 公开 公共 static 静态
    // 属性是对象独有的 ,方法是在原型上的
    var User = /** @class */ (function () {
        function User(n, a) {
            this.name = n;
            this.age = a;
        }
        User.prototype.info = function () {
            return "".concat(this.name, "'s age is ").concat(this.age, " years old ");
        };
        return User;
    }());
    var hd = new User('Eagon', 18);
    var gy = new User('耿延', 2);
    for (var key in gy) {
        if (gy.hasOwnProperty(key)) {
            console.log(gy[key]);
        }
    }
    // for (const key in gy) {
    //   if (Object.hasOwnProperty(key)) {
    //     console.log(hd[key]);
    //   }
    // }
}
