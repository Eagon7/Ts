"use strict";
(() => {
    function sum(a, b, c) {
        console.log(c);
        c = c || 0;
        return a + b + 0;
    }
    console.log(sum(1, 2, 3));
})();
