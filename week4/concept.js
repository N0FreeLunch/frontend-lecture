// iterate over an array of data to create an HTML document.

// iterate over an array 무슨말 : 반복문을 의미한다.
// 배열을 반복해서 돌리는 것

console.log(["a", "b", "c", "d", "e"]);

// iterate : 전체를 순회한다는 의미를 가지고 있다.
// 인덱스 0 부터 인덱스 마지막까지 하나씩 원소를 뽑아내는 작업

var sampleArray = ["aa", "bb", "cc", "dd", "ee"];
console.log("sampleArray length : ", sampleArray.length);

console.log("---array iterator---");
for (var i = 0; i < sampleArray.length; i++) {
  console.log(sampleArray[i]);
}
console.log("--------------------");

// i = 0 일때, sampleArray[0]가 console.log에 의해서 출력이 된다.
// i = 1 일때, sampleArray[1]가 console.log에 의해서 출력이 된다.
// i = 2 일때, sampleArray[2]가 console.log에 의해서 출력이 된다.
// i = 3 일때, sampleArray[3]가 console.log에 의해서 출력이 된다.
// i = 4 일때, sampleArray[4]가 console.log에 의해서 출력이 된다.
// i = 5 일때, i < sampleArray.length가 5 < 5 이므로 false라서 반복문이 돌아가지 않는다. (등식이 성립하지 않아서 false)

// 이게 iterate over an array
// 배열에 있는 각 원소를 하나씩 확인하는 작업이 iterator
// 배열에 있는 각 원소를 하나씩 조작하는 작업이 iterator
// 배열을 순회하는 작업이 for문 이외에도 몇가지 방법이 더 있다. 그래서 for문 돌린다로 이해하는 것 보다는 배열의 원소를 하나씩 다룬다는 의미로 받아들이는 게 좋다.



// to create an HTML document
// 자바스크립트로 HTML 도큐먼트를 만드는 방법

// 가장 기본적인 HTML의 구조
// <html>
//   <head>
//   </head>
//   <body>
//   </doby>
// </html>
// 화면에 나오는 부분은 body 태그 안에

//   <body>
//   test
//   </doby>

// html 파일에 아무것도 안 넣었을 때 브라우저가 기본 HTML 구조를 만들어 준다.
// <html>
//   <head>
//   </head>
//   <body>
//   </doby>
// </html>
// 위 구조는 브라우저에서 실행하는 HTML 문서라면 반드시 가지고 있다.


// 브라우저에 내용을 표시하기 위해서는 body 태그 안에 뭔가를 적어 줘야 한다. 그런데 body 태그가 없는 경우는 없다. 없으면 브라우저가 만들어 주기 때문에
// 자바스크립트로 body 태그 안에 뭔가를 추가하려면
// body 태그를 자바스크립트에서 선택해야 한다. 자바스크립트로 바디 태그 안에 뭔가를 넣기 위해서
console.log(document.body);

// 객체(objcet) : 뭔가를 가지고 있는 대상
// 자바스크립트 코드로서의 document가 존재한다. (브라우저가 기능으로 제공한다.)
// document 라는 객체가 문서 조작에 관한 여러가지 기능들을 가지고 있다.
// document가 가지고 있는 어떤 기능에 접근하려면 .으로 접근한다.
// document가 가지고 있는 body에 접근하기 위해서 document.body를 사용한다.

console.log(document.body);
// console.log(document.body) 이것의 결과는 dom element
// dom element : 자바스크립트에서 태그를 다룰 수 있도록 실제 태그를 자바스크립트 영역으로 가져온 것.
// 비유 : 건물, 건물의 설계도, 설계도를 조작해서 뭔가 만들어 나감. HTML 문서도 자바스크립트에서 만들어가기 위해서 모형을 가지고 오는 것.

// dom element라는 것은 객체(object) 여러기능을 가지고 있다.

// text를 만들고 싶다면 innserText라는 기능을 사용한다.
// document.body.innerText = "test";

// body 태그의 모든 내용을 "test"라는 문자열로 덮어 씌워 버린다.
// 그래서 <div id="contents"></div> 여기에 자바스크립트로 test란 글을 넣고 싶다고 하자.

// https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/innerText
// Node라는 것이 dom element를 의미한다.

// 태그를 선택할 수 있다.
// <div id="contents"></div> 여기에 자바스크립트로 test란 글을 넣고 싶다고 하자.
console.log(document.querySelector("#contents"));
// <div id="contents"></div>의 돔 엘리먼트를 얻었다.

document.querySelector("#contents").innerText = "test";
// #contents는 id="contents"인 태그를 가져와라

console.log(Number.parseFloat(1231324).toFixed(2));
console.log("test test".replace(" ", "-"));
// 객체가 가지고 있는 뭔가를 쓸 때는 .을 사용한다.

console.log("dom element : ", document.querySelector("#contents"));
// #은 id를 의미하고 #어쩌구의 어쩌구는 contents
// <div id="contents"></div>

// css 선택자 : https://code.tutsplus.com/ko/tutorials/the-30-css-selectors-you-must-memorize--net-16048

// 돔 엘리먼트는 객체(object)이다. 뭔가를 가지고 있다.
// document.querySelector("#contents").innerText = "test";
// document.querySelector("#contents") 라는 돔 엘리먼트는 innerText 속성을 가지고 있다.
// 돔 엘리먼트의 innerText라는 속성에  "test"를 넣으면 <div id="contents"></div> 이 안에 test 들어간다.

// HTML 안에 있는 돔을 선택을 했잖아
// 자바스크립트 안에 새로운 돔을 만들거야
console.log("create element : ", document.createElement('div'));

var testDom = document.createElement('div');
console.log("test dom : ", testDom);

testDom.innerText = "testDom";
testDom.innerText = "testDom1";

// testDom을 ID가 contents인 테그 안에 집어 넣어 보자.
// 돔 엘리먼트 객체가 가진 appendChild 함수를 사용한다.
document.querySelector("#contents").appendChild(testDom);
// appendChild : 태그에 자식태그로 맨 마지막 위치에 태그를 달아준다.

// 자바스크립트에서 태그를 만들어서 HTML 문서에 넣은 것

// html 문서 안에 body 태그 안에 태그 직접 적지 않고 자바스크립트로만 태그를 만들 수 있다.

var parentTag = document.createElement('div');

// <div id="contents" style="color : green;"></div> 태그에 css 속성을 지정할 수 있다.
// style 어트리뷰트 안에 color 프로퍼티에 green이란 값을 지정했다
// style attribute의 value가 "color : green;", color property의 value가 green
// 태그의 어트리 뷰트랑 프로퍼티를 지정하는 방식을 자바스크립트로 하자.

// 태그 안에 style="background-color : blue;"
parentTag.style.backgroundColor = "blue";
// 태그 안에 style="height : 100px;"
parentTag.style.height = "100px";
// 태그 안에 style="height : 100px;"
parentTag.style.width = "100px";


// 자바스크립트 상에서만 존재
console.log("parentTag : ", parentTag);

// body에 childtag로 붙일 거야
// document.body : body 태그 선택, body 태그의 돔 엘리먼트
document.body.appendChild(parentTag);



var tag1 = document.createElement('div');
var tag2 = document.createElement('div');
var tag3 = document.createElement('div');
var tag4 = document.createElement('div');
var tag5 = document.createElement('div');

tag1.innerText = "태그1";
tag1.style.color = "yellow";
tag2.innerText = "태그2";
tag2.style.color = "yellow";
tag3.innerText = "태그3";
tag3.style.color = "yellow";
tag4.innerText = "태그4";
tag4.style.color = "yellow";
tag5.innerText = "태그5";
tag5.style.color = "yellow";

parentTag.appendChild(tag1);
parentTag.appendChild(tag2);
parentTag.appendChild(tag3);
parentTag.appendChild(tag4);
parentTag.appendChild(tag5);

// your assignment is to iterate over an array of data to create an HTML document.
// HTML 도큐먼트를 만드는 배열을 순회(iterator)하라

var tagList = [tag1,tag2,tag3,tag4,tag5];

var parentTag2 = document.createElement('div');
parentTag2.style.backgroundColor = "green";

document.body.appendChild(parentTag2);

for (var i = 0; i < tagList.length; i++) {
  parentTag2.appendChild(tagList[i]);
}
// 파란색 박스 안에 넣은 tag1,2,3,4,5가 초록색 박스 안드로 들어갔다.
// 만든 태그는 하나만 존재한다.
