// 5.Calculate the sum of numbers in an array of numbers.
// console.log('Sum of Array #1: ' + (sum_of_array([1,1,2]) === 4))
// console.log('Sum of Array #2: ' + (sum_of_array([1,1,2,5,5]) === 14))

var add = function (a, b) {
  return a+b;
}

var result = add(1,2);
console.log(result)

console.log(add(1,2));


var sample = function (array) {
  return array;
}

console.log("sample function : ", sample([1,1,2]));

var manipulateArray = function (array) {
  console.log("inner array : ", array[0]);
  console.log("inner array : ", array[1]);
  console.log("inner array : ", array[2]);
  console.log("inner array : ", array[3]);
}

// no console.log
manipulateArray([1,1,2]);

var testSum = function (array) {
  return array[0] + array[1] + array[2];
  // return 1 + 1 + 2
}

console.log("testSum : ", testSum([1,1,2]));

console.log("testSum : ", testSum([1,5]));


console.log("sum with undefined : ", 1 + 2 + undefined);
// Not a Number


console.log("array length :", [1,1,2].length);
// 결과가 3개
console.log("sum elements : ", [1,1,2][0] + [1,1,2][1] + [1,1,2][2]);

// array.length, string.length
// length는 인덱스가 몇 개 있냐?
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length
console.log("string index : ", "ABCDEF"[0]);
console.log("string index : ", "ABCDEF"[1]);
console.log("string index : ", "ABCDEF"[2]);
console.log("string index : ", "ABCDEF"[3]);
console.log("string index : ", "ABCDEF"[4]);
console.log("string index : ", "ABCDEF"[5]);
console.log("string length : ", "ABCDEF".length);
var alphabet = "ABCDEF";
console.log("string index : ", alphabet[0]);
console.log("string index : ", alphabet[1]);
console.log("string index : ", alphabet[2]);
console.log("string index : ", alphabet[3]);
console.log("string index : ", alphabet[4]);
console.log("string index : ", alphabet[5]);
// 철자가 6개
console.log("string length : ", alphabet.length);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length
console.log("array index : ", ["A", "b", "c"][0]);
console.log("array index : ", ["A", "b", "c"][1]);
console.log("array index : ", ["A", "b", "c"][2]);
console.log("array length : ", ["A", "b", "c"].length);

// 문자열 + 숫자
console.log("plus : ",  1+2+3);
console.log("plus : ",  "abc"+1+2+3);
console.log("plus : ",  1+2+3+"abc");

// 여러 수가 담긴 배열(array)의 원소(element)를 다 더하는 것 만들기
// 마지막 인덱스는 length 값보다 항상 1이 작다.
var sumElements = function (array) {
  for (var i = 0; i < array.length; i++) {
    // 0 이상 array.length 미만
    console.log("from index 0 : ", i+","+array[i]);
    // 숫자 + 문자 + 숫자
  }
}

sumElements([11,12,13]);

var sumElements = function (array) {
  for (var i = 1; i <= array.length; i++) {
    // 1 이상 array.length 이하
    console.log("from index 1 : ", i+","+array[i-1]+","+(i-1));
  }
}

sumElements([11,12,13]);

// [11,12,13][0]
// [11,12,13][1]
// [11,12,13][2]
//
// [11,12,13][1]
// [11,12,13][2]
// [11,12,13][3]


var sumElements = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    console.log("innser sum : ",sum);
  }
  return sum;
}

// 동작하지는 않지만 예시로
// var sumElements = function ([11,12,13,14]) {
//   var sum = 0;
//   for (var i = 0; i < [11,12,13,14].length; i++) {
//     sum = sum + [11,12,13,14][i];
//     console.log("innser sum : ",sum);
//   }
//   return sum;
// }

// i = 0 일때 : sum = sum + [11,12,13,14][i] 값은
// [11,12,13,14][0] => 11
// 오른쪽 sum => 0
// 왼쪽 sum => 0+11 => 11

// i = 1 일때 : sum = sum + [11,12,13,14][i] 값은
// [11,12,13,14][1] => 12
// 오른쪽 sum => 11
// 왼쪽 sum => 11+12 => 23

// i = 2 일때 : sum = sum + [11,12,13,14][i] 값은
// [11,12,13,14][2] => 13
// 오른쪽 sum => 23
// 왼쪽 sum => 23+13 => 36

// i = 3 일때 : sum = sum + [11,12,13,14][i] 값은
// [11,12,13,14][3] => 14
// 오른쪽 sum => 36
// 왼쪽 sum => 36+14 => 50


sumElements([11,12,13,14])


// 해답
var sumElements = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}


console.log("sum : ", sumElements([11,12,13,14]));


// 해답
var sumElements = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]; // sum = sum + array[i];와 같은 표현
  }
  return sum;
}

console.log("sum : ", sumElements([11,12,13,14]));


// 고급 // 현 단계에서 알 필요 없음
var sumElements = function (array) {
  return array.reduce((x,y) => x+y);
}

console.log("sum : ", sumElements([11,12,13,14]));

var sumElements = (array) => array.reduce((x,y) => x+y);

console.log("sum : ", sumElements([11,12,13,14]));



var sum_of_array = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log('Sum of Array #1: ' + (sum_of_array([1,1,2]) === 4));
console.log('Sum of Array #2: ' + (sum_of_array([1,1,2,5,5]) === 14));
