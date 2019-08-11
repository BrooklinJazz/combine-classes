"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineClasses = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.reduce(function (classNames, currentClassName) {
        if (Array.isArray(currentClassName)) {
            return currentClassName[0]
                ? classNames + " " + currentClassName[1]
                : classNames;
        }
        else if (currentClassName) {
            return classNames + " " + currentClassName;
        }
        else {
            return classNames;
        }
    }, "");
};
exports.default = exports.combineClasses;
//# sourceMappingURL=index.js.map