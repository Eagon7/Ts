{
    // readonly 是只读属性, 不可更改
    // 构造函数在初始化的时候是可以改变readonly的
    var Axios = /** @class */ (function () {
        function Axios(site) {
            this.site = 'https://www.houdunren.com/api';
            this.site = site || this.site;
        }
        /**
         * get
         */
        Axios.prototype.get = function (url) {
            console.log("\u4F60\u8BF7\u6C42\u7684\u662F".concat(this.site, "/").concat(url));
        };
        return Axios;
    }());
    var instance = new Axios();
    // instance.site = 'axios'  修改报错 因为site是readonly
    instance.get('users');
}
