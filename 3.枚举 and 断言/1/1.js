//枚举 : sex: 1男 2女 0保密  但是数字表示不明确. 这个时候可以使用枚举
var SexType;
(function (SexType) {
    SexType[SexType["BOY"] = 0] = "BOY";
    SexType[SexType["GIRL"] = 1] = "GIRL";
    SexType[SexType["ACC"] = 10] = "ACC";
    SexType[SexType["UNKNOWN"] = 11] = "UNKNOWN"; //11
})(SexType || (SexType = {}));
var user = {
    name: '后盾人',
    sex: 1
};
console.log(SexType.BOY); // 0
console.log(SexType.GIRL); // 1
console.log(SexType.UNKNOWN); // 11
