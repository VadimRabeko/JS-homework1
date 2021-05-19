'use strict';

//TASKS FROM PRESENTATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//1 <<<

function hello2(name) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return 'Hello, guest!';
  }
}
console.log(hello2('vadim'));

//2 <<<

function rgb(a = 0, b = 0, c = 0) {
  return `rgb(${a},${b},${c})`;
}
console.log(rgb(555, 668));

//3 <<<

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(8, 5));

//4 <<<

function checkNum(a) {
  if (a > 0) {
    return '+++';
  }
  if (a < 0) {
    return '---';
  }
}
console.log(checkNum(-5));

//5 <<<

function calcNum(a, b, c) {
  return a + b + c;
}
console.log(calcNum(1, 2, 3));

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//TASK 1 <<<

function calcDiv(a) {
  for (let i = 1; ; i++) {
    a = a / 2;
    if (a < 10) {
      return i;
    }
  }
}
console.log(calcDiv(100));

// TASK 2 <<< (не разобрался как использовать функции из другого файла)

let a = prompt('enter your number from 1 to 10');
function checkEqualNum() {
  if (a > 0 && a < 11) {
    areNumbersEqual();
  } else {
    if (confirm('wrong data, lets play again?')) {
      a = prompt('enter another number from 1 to 10');
      checkEqualNum();
    } else {
      alert('goodbye');
    }
  }
}

function areNumbersEqual() {
  let b = getRandomNumber();
  if (a == b) {
    alert('Numbers are equal! U r lucky!');
  } else {
    alert('Ohh, numbers are not equal :(');
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(1);
  max = Math.floor(11);
  return Math.floor(Math.random() * (max - min)) + min;
}
checkEqualNum();

//TASK 3 <<<

function strWord(str) {
  let splt = str.split(' ');
  let res = '';
  for (let i = 0; i < splt.length; i++) {
    let x = splt[i];
    let y = x.substring(0, 1).toUpperCase();
    let z = x.substring(1, x.length);
    if (i == splt.length - 1) {
      res += y + z;
    } else {
      res += y + z + ' ';
    }
  }
  return console.log(res);
}
strWord('how are you?');

// TASK 4 <<<

function calcArea() {
  let sum = 0;
  let a = 0;
  for (let i = 1; ; i++) {
    if ((a = Number(prompt(`enter ${i} number`)))) {
      sum += a;
    } else {
      break;
    }
  }
  return alert(sum);
}
calcArea();

// TASK 5 <<<

function calcSumNumber(a = 2021) {
  a = String(a);
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    let x = a[i];
    sum += +x;
  }
  return sum;
}
console.log(calcSumNumber(2055));

// TASK 6 <<<

function strKebab(str) {
  let splt = str.split(' ');
  let res = '';
  for (let i = 0; i < splt.length; i++) {
    let x = splt[i];
    let y = x.substring(0, x.length).toLowerCase();
    if (i == splt.length - 1) {
      res += y;
    } else {
      res += y + '-';
    }
  }
  return console.log(res);
}
strKebab('How Are You?');

//TASK 7 <<<

function strAbb(str) {
  let splt = str.split(' ');
  let res = '';
  for (let i = 0; i < splt.length; i++) {
    let x = splt[i];
    let y = x.substring(0, 1).toUpperCase();
    res += y;
  }
  return console.log(res);
}
strAbb('teach me skills');
