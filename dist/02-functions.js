"use strict";
function sum(a, b) {
    return a + b;
}
sum(2, 3);
//ничего не дает, но завершится
function logo(name, userId) {
    console.log('Hello', name, 'with ID', userId || 'anonym');
}
logo('Aislu', '123');
//ничего не возвращает и не возвращает
function crash() {
    throw new Error('crash');
}
