"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function read() {
    var result = (0, fs_1.readFileSync)("./input.txt", 'utf-8');
    var ans = 0, j = 0;
    var map = new Map();
    var char = 'A';
    result.split(/\r?\n/).forEach(function (line) {
        if (j % 3 == 0) {
            map = new Map();
            var i = 0;
            while (i != line.length) {
                map.set(line[i], { one: true });
                i++;
            }
        }
        else if (j % 3 == 1) {
            var i = 0;
            while (i != line.length) {
                if (map.has(line[i])) {
                    map.set(line[i], { one: true, two: true });
                }
                i++;
            }
        }
        else {
            var i = 0;
            while (i != line.length) {
                if (map.has(line[i])) {
                    var obj = map.get(line[i]);
                    if (obj.one && obj.two) {
                        char = line[i];
                    }
                }
                i++;
            }
            if (char[0].toUpperCase() == char[0]) {
                ans += char[0].charCodeAt(0) - 'A'.charCodeAt(0) + 27;
            }
            else {
                ans += char[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            }
        }
        j++;
    });
    console.log(ans);
}
read();
