// 单例模式: 只生产出一个对象
// 个人认知: 
{
    var Axios = /** @class */ (function () {
        function Axios() {
            console.log('构造函数');
        }
        return Axios;
    }());
    new Axios();
}
