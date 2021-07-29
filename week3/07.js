// console.log('Only Positive #1: ' + (JSON.stringify(only_positive([1,-100,2,-2])) === '[1,2]'))
// console.log('Only Positive #2: ' + (JSON.stringify(only_positive([1,-1,-2,58,24])) === '[1,58,24]'))

// JSON.stringify
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// 자바스크립트 표현 그대로를 문자열로 다 변환해 준다.

console.log("array type : ", [1,-1,-2,58,24]);
console.log("array type element: ", [1,-1,-2,58,24][0]);
console.log("array type element: ", [1,-1,-2,58,24][1]);
console.log("array type element: ", [1,-1,-2,58,24][2]);
console.log("array type element: ", [1,-1,-2,58,24][3]);

console.log("string index : ", "[1,-1,-2,58,24]"[0]);
console.log("string index : ", "[1,-1,-2,58,24]"[1]);
console.log("string index : ", "[1,-1,-2,58,24]"[2]);
console.log("string index : ", "[1,-1,-2,58,24]"[3]);
console.log("string index : ", "[1,-1,-2,58,24]"[4]);

console.log("string type : ", JSON.stringify([1,-1,-2,58,24]));
console.log("string type element : ", JSON.stringify([1,-1,-2,58,24])[0]);
console.log("string type element : ", JSON.stringify([1,-1,-2,58,24])[1]);
console.log("string type element : ", JSON.stringify([1,-1,-2,58,24])[2]);
console.log("string type element : ", JSON.stringify([1,-1,-2,58,24])[3]);
console.log("string type element : ", JSON.stringify([1,-1,-2,58,24])[4]);

// 배열 타입 검사 방법
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
console.log("is array? ", Array.isArray([1,-1,-2,58,24]));
console.log("is array? ", Array.isArray(JSON.stringify([1,-1,-2,58,24])));



var only_positive = function (array) {
  return array;
}

console.log(only_positive([-1,0,1,2,3]));

var only_positive = function (array) {
  if(array[0] > 0){
    console.log(array[0]);
  }else {

  }
  if(array[1] > 0){
    console.log(array[1]);
  }
  if(array[2] > 0){
    console.log(array[2]);
  }
  if(array[3] > 0){
    console.log(array[3]);
  }
  if(array[4] > 0){
    console.log(array[4]);
  }
}

only_positive([-1,0,1,2,3]);

var only_positive = function (array) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      console.log("only positive : ", array[i]);
    }
  }
}

only_positive([-1,0,1,2,3]);
console.log("no return : ", only_positive([-1,0,1,2,3]));


var testArray = [];
console.log("test array : ",testArray);
testArray[0] = "a";
console.log("test array : ",testArray);
testArray[1] = "b";
console.log("test array : ",testArray);
testArray[2] = "c";
console.log("test array : ",testArray);

var testArray = [];
console.log("test array 2 : ",testArray);
testArray[2] = "a";
// 인덱스 0,1이 자동 생성 된다.
console.log("test array 2 : ",testArray); // 0 ,1 번째 비어 있는 상태
console.log("test array 2 length : ", testArray.length);


var testArray = [];
console.log("test array 3 : ",testArray);
testArray[0] = "c";
console.log("test array 3 length : ", testArray.length);


var testArray = [];
testArray[0] = [-1,0,1,2,3][0];
console.log("no push : ",testArray)
testArray[1] = [-1,0,1,2,3][1];
console.log("no push : ",testArray)
testArray[2] = [-1,0,1,2,3][2];
console.log("no push : ",testArray)
testArray[3] = [-1,0,1,2,3][3];
console.log("no push : ",testArray)
testArray[4] = [-1,0,1,2,3][4];
console.log("no push : ",testArray)

var testArray = [];
testArray[2] = [-1,0,1,2,3][2];
console.log("no push : ",testArray)
testArray[3] = [-1,0,1,2,3][3];
console.log("no push : ",testArray)
testArray[4] = [-1,0,1,2,3][4];
console.log("no push : ",testArray)

var only_positive = function (array) {
  var tempArray = []; // 배열 정의
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      tempArray[i] = array[i];
    }
  }
  return tempArray;
}

console.log("only_positive : ", only_positive([-1,0,1,2,3]));

// i=0일때, array[i] > 0 가 -1 > 0 이 된다.
// {} 블럭을 실행하지 않는다.

// i=1일때, array[i] > 0 가 0 > 0 이 된다.
// {} 블럭을 실행하지 않는다.

// i=2일때, array[i] > 0 가 1 > 0 이 된다.
// {} 블럭을 실행한다.
// tempArray[i] = array[i]; 부분은 tempArray[2] = 1 이 된다.

// i=2일 때 처음 배열 tempArray의 tempArray[2] 인덱스 2에 값을 넣어 줬다.
// tempArray의 0번 1번 인덱스는 존재한다.

// i=3일때, array[i] > 0 가 2 > 0 이 된다.
// {} 블럭을 실행한다.
// tempArray[i] = array[i]; 부분은 tempArray[3] = 2 이 된다.

// i=4일때, array[i] > 0 가 3 > 0 이 된다.
// {} 블럭을 실행한다.
// tempArray[i] = array[i]; 부분은 tempArray[4] = 3 이 된다.


// [-1,0,1,2,3]
var testArray = [];
testArray[0] = [-1,0,1,2,3][2];
console.log("from 0 index : ", testArray);
testArray[1] = [-1,0,1,2,3][3];
console.log("from 0 index : ", testArray);
testArray[2] = [-1,0,1,2,3][4];
console.log("from 0 index : ", testArray);


var testArray = [];
testArray[0] = [-1,0,1,-2,3][2];
console.log("from 0 index : ", testArray);
testArray[1] = [-1,0,1,-2,3][4];
console.log("from 0 index : ", testArray);

// 양수가 나오면 testArray에 0번, 1번 인덱스를 만들어서 차곡차곡 넣어야 함

var only_positive = function (array) {
  var tempArray = []; // 배열 정의
  var tempArrayIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      tempArray[tempArrayIndex] = array[i];
      tempArrayIndex = tempArrayIndex + 1;
    }
  }
  return tempArray;
}

console.log("only_positive : ", only_positive([-1,0,1,2,3]));

// i=0일때, array[i] > 0 가 -1 > 0 이 된다.
// {} 블럭을 실행하지 않는다.

// i=1일때, array[i] > 0 가 0 > 0 이 된다.
// {} 블럭을 실행하지 않는다.

// i=2일때, array[i] > 0 가 1 > 0 이 된다.
// {} 블럭을 실행한다.
// tempArrayIndex 는 0 이다. tempArray[0]에 1을 넣어준다.
// tempArray[tempArrayIndex] = array[i]; // tempArray[0] = array[1];
// tempArrayIndex = tempArrayIndex + 1; // tempArrayIndex = 0 + 1; // tempArrayIndex는 1

// i=3일때, array[i] > 0 가 2 > 0 이 된다.
// {} 블럭을 실행한다.
// tempArrayIndex 는 1 이다. tempArray[1]에 2을 넣어준다.
// tempArray[tempArrayIndex] = array[i]; // tempArray[1] = array[2];
// tempArrayIndex = tempArrayIndex + 1; // tempArrayIndex = 1 + 1; // tempArrayIndex는 2

// i=4일때, array[i] > 0 가 3 > 0 이 된다.
// {} 블럭을 실행한다.
// tempArrayIndex 는 2 이다. tempArray[2]에 3을 넣어준다.
// tempArray[tempArrayIndex] = array[i]; // tempArray[2] = array[3];
// tempArrayIndex = tempArrayIndex + 1; // tempArrayIndex = 2 + 1; // tempArrayIndex는 3


// push : 인덱스를 쓰지 않고 추가
var testArray = [];
testArray.push("a");
console.log("push : ", testArray);
testArray.push("b");
console.log("push : ", testArray);

var only_positive = function (array) {
  var tempArray = []; // 배열 정의
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}

console.log("only_positive : ", only_positive([-1,0,1,2,3]));

console.log('Only Positive #1: ' + (JSON.stringify(only_positive([1,-100,2,-2])) === '[1,2]'));
console.log('Only Positive #2: ' + (JSON.stringify(only_positive([1,-1,-2,58,24])) === '[1,58,24]'));


// 고급
var only_positive = array => array.filter(e => e > 0);
console.log("only_positive : ", only_positive([-1,0,1,2,3]));
