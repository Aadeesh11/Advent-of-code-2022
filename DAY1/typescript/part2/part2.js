"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function read() {
    var result = (0, fs_1.readFileSync)("./input.txt", 'utf-8');
    var maxi = 0;
    var ans = [];
    result.split(/\r?\n/).forEach(function (line) {
        var curr = parseInt(line);
        if (Number.isNaN(curr)) {
            ans.push(maxi);
            maxi = 0;
        }
        else {
            maxi += curr;
        }
    });
    ans.push(maxi);
    ans.sort(function (a, b) { return b - a; });
    console.log(ans[0] + ans[1] + ans[2]);
}
read();
