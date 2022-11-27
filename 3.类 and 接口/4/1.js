var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    // protect 保护
    // public  公共
    // private 私有的
    var Person = /** @class */ (function () {
        function Person() {
            this.site = 'I"m so bad';
        }
        Person.prototype.info = function () {
            return "".concat(this.name, "'s age is ").concat(this.age, " years old,").concat(this.site);
        };
        Person.prototype.show = function () {
            return this.info();
        };
        return Person;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(n, a) {
            var _this = _super.call(this) || this;
            _this.name = n;
            _this.age = a;
            _this.sex = 1;
            return _this;
        }
        return User;
    }(Person));
    var hd = new User('Eagon', 18);
    console.log(hd.show());
}
