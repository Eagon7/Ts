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
// static 静态属性只能通过构造函数来调用
{
    var Axios = /** @class */ (function () {
        function Axios() {
        }
        Axios.site = 'houdunren.com';
        return Axios;
    }());
    var Axios2 = /** @class */ (function (_super) {
        __extends(Axios2, _super);
        function Axios2() {
            return _super.call(this) || this;
        }
        return Axios2;
    }(Axios));
    var insctance = new Axios();
    console.log(Axios.site);
    console.log(Axios2.site);
}
