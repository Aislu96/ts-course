"use strict";
const numbers = [1, 2, 3, 4, true, ''];
const strs = [];
const strs2 = [];
strs.push('asc');
const cars = [];
cars.push({ brand: 'BMW', wheels: 3, type: 'Sedan' });
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
