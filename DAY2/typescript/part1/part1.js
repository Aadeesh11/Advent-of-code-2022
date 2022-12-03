"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function read() {
    var result = (0, fs_1.readFileSync)("./input.txt", 'utf-8');
    var rock = {
        move: 'X',
        val: 1,
        winOrLose: new Map([['A', 3], ['B', 0], ['C', 6]])
    };
    var paper = {
        move: 'Y',
        val: 2,
        winOrLose: new Map([['A', 6], ['B', 3], ['C', 0]])
    };
    var scs = {
        move: 'Z',
        val: 3,
        winOrLose: new Map([['A', 0], ['B', 6], ['C', 3]])
    };
    var arr = [];
    arr.push(rock);
    arr.push(paper);
    arr.push(scs);
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
