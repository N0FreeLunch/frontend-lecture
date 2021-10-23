var sampleMap = new Map();
console.log(sampleMap);

sampleMap.set('key1', 'value1');
console.log(sampleMap);

sampleMap.set('key2', 'value2');
console.log(sampleMap);

sampleMap.set('key3', 'value3');
console.log(sampleMap);

sampleMap.set('key3', 'value3');
console.log(sampleMap);

sampleMap.set('key1', 'overwiteValue1');
console.log(sampleMap);

// 동일한 키는 하나만 존재한다.
// 그래서 나중에 입력한 데이터로 바꿔진다.

var testText = "dinner dinner chicken dinner";
var chickenMap = new Map();
chickenMap.set('dinner', 1);
chickenMap.set('dinner', 2);
chickenMap.set('chicken', 1);
chickenMap.set('dinner', 3);

console.log(chickenMap);

console.log(chickenMap.get('dinner'));
// dinner의 value 값
console.log(chickenMap.get('chicken'));
// chicken의 value 값


var testText = "dinner dinner chicken dinner";
var words = testText.split(/\s/);
console.log(words);

// dinner가 몇개인지 chicken이 몇개인지 컴퓨터가 알아야 된다.

if(1==2){
  console.log("if 1==2 : ", 0);
}

if(2==2){
  console.log("if 2==2 : ", 0);
}

if(false) {
  console.log("if false : ", 0);
}

if(true) {
  // 조건식의 값이 true 일 때만 컬리 브레이스 안을 실행한다.
  console.log("if true : ", 0);
}


if(0) {
  // 0은 조건식으로 보면 false라고 한다. (자바스크립트에서)
  console.log("if 0 : ", 0);
}

if(1009) {
  // 0이 아닌 숫자는 조건식으로 보면 true라고 한다. (자바스크립트에서)
  console.log("if 1009 : ", 0);
}

var undefinedVariable;
// 변수에 아무런 값도 넣지 않았다.
console.log("undefinedVariable", undefinedVariable);
// 언디파인드
if(undefinedVariable) {
  console.log("if undefinedVariable : ");
}

var definedVariable = "test";

if(definedVariable) {
  // 변수 안에 값이 있으면 실행 된다.
  console.log("if definedVariable : ");
}

if(null) {
  // null은 없는 것이기 때문에 안 뜸
  console.log("if null : ");
}

console.log("null :", Boolean(null));
// Boolean 조건문으로 만들어 주는 함수
console.log("undefinedVariable :", Boolean(undefinedVariable));

console.log("0 :", Boolean(0));

console.log("10 :", Boolean(10));

// if 문 안의 조건문은 조건문으로 만들어 주고 판단한다.

var testText = "dinner dinner chicken dinner";
var words = testText.split(/\s/);

var testChickenMap = new Map();

console.log(testChickenMap.get('dinner'));

console.log(Boolean(testChickenMap.get('dinner')));

if(testChickenMap.get('dinner')) {
  // 실행 안 됨
}

console.log(!testChickenMap.get('dinner'));
// !는 false를 true로 true를 false준다. 조건문 결과를 반대로 만들어 준다.

console.log(testChickenMap);

if(!testChickenMap.get('dinner')) {
  // dinner를 뽑았는데 없으면 실행하세요.
  testChickenMap.set('dinner', 1);
}

console.log(testChickenMap);

if(testChickenMap.get('dinner')) {
  // dinner를 뽑았는데 있으면 실행하세요.
  testChickenMap.set('dinner', testChickenMap.get('dinner')+1);
}

console.log(testChickenMap);

if(testChickenMap.get('dinner')) {
  // dinner를 뽑았는데 있으면 실행하세요.
  testChickenMap.set('dinner', testChickenMap.get('dinner')+1);
}

console.log(testChickenMap);

for (var i = 0; i < words.length; i++) {
  if(!testChickenMap.get(words[i])) {
    // dinner를 뽑았는데 없으면 실행하세요.
    testChickenMap.set(words[i], 1);
  }else {
    if(testChickenMap.get(words[i])) {
      // dinner를 뽑았는데 있으면 실행하세요.
      testChickenMap.set(words[i], testChickenMap.get(words[i])+1);
    }
  }
}

"dinner dinner chicken dinner"

// // 1번째 실행 i = 0
// if(!testChickenMap.get('dinner')) {
//   // dinner를 뽑았는데 없으면 실행하세요.
//   testChickenMap.set('dinner', 1);
// }else {
//   if(testChickenMap.get('dinner')) {
//     // dinner를 뽑았는데 있으면 실행하세요.
//     testChickenMap.set('dinner', testChickenMap.get('dinner')+1);
//   }
// }
//
// // 2번째 실행 i = 1
// if(!testChickenMap.get('dinner')) {
//   // dinner를 뽑았는데 없으면 실행하세요.
//   testChickenMap.set('dinner', 1);
// }else {
//   if(testChickenMap.get('dinner')) {
//     // dinner를 뽑았는데 있으면 실행하세요.
//     testChickenMap.set('dinner', testChickenMap.get('dinner')+1);
//   }
// }
//
// // 3번째 실행 i = 2
// if(!testChickenMap.get('chicken')) {
//   // dinner를 뽑았는데 없으면 실행하세요.
//   testChickenMap.set('chicken', 1);
// }else {
//   if(testChickenMap.get('chicken')) {
//     // dinner를 뽑았는데 있으면 실행하세요.
//     testChickenMap.set('chicken', testChickenMap.get('chicken')+1);
//   }
// }
//
// // 4번째 실행 i = 3
// if(!testChickenMap.get('dinner')) {
//   // dinner를 뽑았는데 없으면 실행하세요.
//   testChickenMap.set('dinner', 1);
// }else {
//   if(testChickenMap.get('dinner')) {
//     // dinner를 뽑았는데 있으면 실행하세요.
//     testChickenMap.set('dinner', testChickenMap.get('dinner')+1);
//   }
// }
