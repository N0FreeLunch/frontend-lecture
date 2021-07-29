console.log("Hello, World");

// 문자열은 유사 배열이다. (array 비슷한데 array는 아니다.)
// 문자열은 "", '', `` 이런 식으로 값을 표현하는 방식이다.

// 배열이란
console.log("array : ", [5,6,4,2,1]);
console.log("array : ", [5,6,4,2,1][3]);
var array = [5,6,4,2,1];
// 변수를 만드는 방식 var, let, const
console.log("array : ", array);
console.log("array : ", array[3]);

// 유사 배열의 특징을 살펴보자.
console.log("str : ", "Hello, World"[0]);
console.log("str : ", "Hello, World"[5]);

var str = "Hello, World";
console.log("str : ", str[0]);
console.log("str : ", str[5]);

// hello 만들기
console.log(str[0] + str[1] + str[2] + str[3] + str[4]);
console.log(str[0] + str[1] + str[2] + str[3]);

// slice(이상, 미만)
console.log("slice : ", "Hello, World".slice(0,0));
console.log("slice : ", "Hello, World".slice(0,1));
console.log("slice : ", "Hello, World".slice(0,2));
console.log("slice : ", "Hello, World".slice(0,3));

// 일반화 : 어떤 문자열이 와도 된다. 어떤 숫자가 들어와도 된다.
function truncate_string(str,n) {
  return str.slice(0,1);
}
console.log("use function : ", truncate_string("Hello, World"));

function truncate_string(str,n) {
  return str.slice(0,2);
}
console.log("use function : ", truncate_string("Hello, World"));

// 변수 위주로 함수를 상용하자 헷갈리니깐
var truncate_string = function (str,n) {
  return str.slice(0,1);
}
console.log("use function : ", truncate_string("Hello, World"));

var truncate_string = function (str,n) {
  return str.slice(0,2);
}
console.log("use function : ", truncate_string("Hello, World"));

var truncate_string = function (str,n) {
  return str.slice(0,3);
}
console.log("use function : ", truncate_string("Hello, World"));

// 일반화 되었을 때
var truncate_string = function (str,n) {
  return str.slice(0,n);
}
console.log("use function : ", truncate_string("Hello, World",1));

var truncate_string = function (str,n) {
  return str.slice(0,n);
}
console.log("use function : ", truncate_string("Hello, World",2));

// for문
console.log("for문 0이상 5미만");
var truncate_string = function () {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
}();

// slice랑 비교
str.slice(0,5);

// 하나씩 표시
var truncate_string = function () {
  var str = "Hello, World";
  for (var i = 0; i < 5; i++) {
    console.log(str[i]);
  }
}();


// 문자열 더하기
console.log("sum str : ", "");
console.log("sum str : ", "" + "H");
console.log("sum str : ", "" + "H" + "e");
console.log("sum str : ", "" + "H" + "e" + "l");
console.log("sum str : ", "" + "H" + "e" + "l" + "l");
console.log("sum str : ", "" + "H" + "e" + "l" + "l" + "o");


// 변수를 변경하기
var sum = "";
console.log("var sum str : ", sum);
sum = sum + "H";
console.log("var sum str : ", sum);
sum = sum + "o";
console.log("var sum str : ", sum);
sum = sum + "l";
console.log("var sum str : ", sum);
sum = sum + "l";
console.log("var sum str : ", sum);

// 뭉처서 표시 : 즉시 실행 함수 : 함수를 만들자 마자 실행,
// truncate_string는 함수의 결과가 들어간 상태
var truncate_string = function () {
  var str = "Hello, World";
  var sum = "";
  for (var i = 0; i < 5; i++) {
    sum = sum + str[i];
    // 결과 = sum + 스펠
  }
  console.log("function result : ", sum);
}();


// str은 parameter 매개 변수
var truncate_string = function (str) {
  var sum = "";
  for (var i = 0; i < 5; i++) {
    sum = sum + str[i];
    // 결과 = sum + 스펠
  }
  console.log("function result : ", sum);
}("Hello, World");


var truncate_string = function (str) {
  var sum = "";
  for (var i = 0; i < 2; i++) {
    sum = sum + str[i];
  }
  console.log("function result : ", sum);
}("Hello, World");


var truncate_string = function (str) {
  var sum = "";
  for (var i = 0; i < 3; i++) {
    sum = sum + str[i];
  }
  console.log("function result : ", sum);
}("Hello, World");


var truncate_string = function (str) {
  var sum = "";
  for (var i = 0; i < 5; i++) {
    sum = sum + str[i];
  }
  console.log("function result : ", sum);
}("Hello, World");


var truncate_string = function (str, n) {
  var sum = "";
  for (var i = 0; i < n; i++) {
    sum = sum + str[i];
  }
  console.log("function result : ", sum);
}("Hello, World",10);

// 즉시 실행함수가 아닌 방식 : 마지막 괄호를 지운다, 함수가 들어가 상태
// truncate_string는 함수가 들어간 상태
var truncate_string = function (str, n) {
  var sum = "";
  for (var i = 0; i < n; i++) {
    sum = sum + str[i];
  }
  console.log("call function : ", sum);
};

truncate_string("Hello, World",5);


// 함수를 표시 (실행이 안 된 상태)
var func = function () {
  return "hello"
}
console.log("function : ",func);

// 함수를 실행한 상태
console.log("run function : ",func());

// return이 없는 경우 : 함수를 실행했는데 결과 값이 없다.
var func = function () {
}
console.log("run function : ", func());

var func = function () {
  console.log("hi");
}
console.log("function : ", func);
console.log("no return : ", func());

// 함수에 리턴값이 있어서 함수 실행 경과를 받을 수 있다.
var func = function () {
  return "hi"
}

console.log("exist return : ", func());


// 결과 값이 없는 경우
var truncate_string = function (str, n) {
  var sum = "";
  for (var i = 0; i < n; i++) {
    sum = sum + str[i];
  }
  // return sum;
};

console.log('Truncate String: ' + truncate_string);
console.log('Truncate String: ' + truncate_string("Hello, World",5));


var truncate_string = function (str, n) {
  var sum = "";
  for (var i = 0; i < n; i++) {
    sum = sum + str[i];
  }
  return sum;
};
console.log('Truncate String: ' + truncate_string("Hello, World",5));
