"use strict";
exports.__esModule = true;
function double(list) {
    return list.map(function (value) { return 2 * value; });
}
exports.double = double;
double(new Float32Array([0, 1, 2]));
double([0, 1, 2]);
