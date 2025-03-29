var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userData = {
    aswad: {
        id: 1,
        description: "aswad",
    },
    abad: {
        id: 2,
        description: "abad",
    },
    mohsin: {
        id: 3,
        description: "mohsin",
    },
};
console.log(userData);
var student = {
    age: 20,
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
var updatedTodo = updateTodo(todo1, todo2);
console.log(updatedTodo);
