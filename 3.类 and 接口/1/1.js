{
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
    var hd = new User('Eagon', 2);
    console.log(hd.info());
}
