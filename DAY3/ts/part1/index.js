"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function read() {
    var result = (0, fs_1.readFileSync)("./input.txt", 'utf-8');
    var ans = 0;
    result.split(/\r?\n/).forEach(function (line) {
        var map = new Map();
        var i = 0, j = (line.length / 2);
        while (i != line.length / 2) {
            map.set(line[i], true);
            i++;
        }
        var char = 'A';
        while (j != line.length) {
            if (map.get(line[j]) != undefined) {
                char = line[j];
                break;
            }
            j++;
        }
        if (char[0].toUpperCase() == char[0]) {
            ans += char[0].charCodeAt(0) - 'A'.charCodeAt(0) + 27;
        }
        else {
            ans += char[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        }
    });
    console.log(ans);
}
read();
