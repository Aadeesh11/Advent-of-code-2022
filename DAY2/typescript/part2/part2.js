"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function read() {
    var result = (0, fs_1.readFileSync)("./input.txt", 'utf-8');
    var loss = {
        move: 'X',
        val: 0,
        winOrLose: new Map([['A', 3], ['B', 1], ['C', 2]])
    };
    var draw = {
        move: 'Y',
        val: 3,
        winOrLose: new Map([['A', 1], ['B', 2], ['C', 3]])
    };
    var win = {
        move: 'Z',
        val: 6,
        winOrLose: new Map([['A', 2], ['B', 3], ['C', 1]])
    };
    var arr = [];
    arr.push(loss);
    arr.push(draw);
    arr.push(win);
    var ans = 0;
    result.split(/\r?\n/).forEach(function (line) {
        var arry = line.split(" ");
        var op = arry[0];
        var me = arry[1].charCodeAt(0);
        ans += arr[me - 'X'.charCodeAt(0)].val + arr[me - 'X'.charCodeAt(0)].winOrLose.get(op);
    });
    console.log(ans);
}
read();
