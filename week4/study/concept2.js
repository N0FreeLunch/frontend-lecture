// HTML에서 버튼 만들기 (HTML index.html 안에 써 줌)
// <!-- 버튼을 누르면 자바스크립트 코드 console.log('javascript code')가 실행이 된다.-->
// <button onclick="console.log('javascript code in onclick attribute')">html button</button>


// <script src="./concept2.js"></script>는 HTML에서 <button id="sampleBtn">select html button tag</button> 아래에 있다.
// <button id="sampleBtn">select html button tag</button>가 브라우저에 의해서 실행이 된다.
// 브라우저에서 버튼태그가 실행이 되어 브라우저가 이 태그가 있는지 알기 때문에
// <script src="./concept2.js"></script>에서 <button id="sampleBtn">select html button tag</button>태그를 선택할 수 있다.

// id가 sampleBtn인 태그를 선택한다.
var sampleBtn = document.querySelector('#sampleBtn');
console.log("select btn in concept2 : ", sampleBtn);
// 이 때 버튼을 클릭해도 아무런 반응이 없다.
// 클릭해서 반응이 있게 하려면 onclick 어트리뷰트 달아줘야 한다.


// <div id="contents" style="color : green;"></div>
// 이 태그에 스타일을 어떻게 달았었냐 위 태그를 tag라는 변수가 가리킨다고 하자.
// var sampleBtn = document.querySelector('#sampleBtn');
// tag.style.color="green" 이렇게 어트리뷰트를 추가할 수 있다.


// onclick도 어트리뷰트라서 style 추가한 것과 똑같이 추가하면 된다.
// sampleBtn.onclick = 이쪽에 함수가 와야 한다.
// HTML에서 직접 적을 때는 문자열이 되었지만 자바스크립트 파일에서는 문자열을 넣으면 안 된다. 함수를 넣어 줘야 한다.
sampleBtn.onclick = "console.log('javascript code in onclick attribute')";
// 주의할 점 함수를 실행한 것을 넣으면 안 된다.

var btnFunc = function (str) {
  console.log("btnFunc : "+str);
  return "return btnFunc";
}
// 함수를 실행
btnFunc("run");

// 함수는
// function () {
//   console.log("btnFunc");
// }
// 함수를 가리키는 변수는 btnFunc
// btnFunc는 함수이다.

console.log("function :", btnFunc);
btnFunc("run2");


sampleBtn.onclick = btnFunc("run3");
// 이 표현은
sampleBtn.onclick = "return btnFunc";
// 이 표현과 똑같다.
// btnFunc("run3")가 실행된 결과가 "return btnFunc"이기 때문에
// sampleBtn.onclick에 문자열을 넣은 것이 되어서 버튼을 눌러도 실행 되지 않는다.

// 함수를 넣어보자.
var btnFunc2 = function () {
  alert("btnFunc2");
}
sampleBtn.onclick = btnFunc2;
// 실행되지 않은 함수를 넣어야 한다.

sampleBtn.onclick = function () {
  alert("btnFunc3");
};
// 이런식으로도 만들 수 있다.
