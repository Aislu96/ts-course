"use strict";
const staticX = 'loading';
const arr = [];
function printId(id) {
    if (typeof id !== "number") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
        return 1;
    }
    else {
        console.log('Hello', person);
        return '1';
    }
}
