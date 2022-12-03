"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function read() {
    var result = (0, fs_1.readFileSync)("./input.txt", 'utf-8');
    var maxi = 0;
    var ans = 0;
    result.split(/\r?\n/).forEach(function (line) {
        var curr = parseInt(line);
        if (Number.isNaN(curr)) {
            ans = (maxi > ans ? maxi : ans);
            maxi = 0;
        }
        else {
            maxi += curr;
        }
    });
    console.log((maxi > ans ? maxi : ans));
}
read();
