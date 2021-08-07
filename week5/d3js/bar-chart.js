// reference : https://observablehq.com/@d3/lets-make-a-bar-chart
// const div = d3.create("div");
// div.html("Hello, world!");
// return div.node();

console.log("D3 library : ", d3);


console.log("vanilla js : ", document.querySelectorAll("p"));
// vanilla js 순수 자바스크립트 문법 : 라이브러리 같은 거 안 쓰고 만드는 것.
// 태그 하나를 선택할 때 : document.querySelector()
// 태그를 여러개 선택할 때 : document.querySelectorAll()
// 모든 p 태그를 선택하시오 : document.querySelectorAll("p")
// 배열에 돔 엘리먼트들이 들어 있다.
console.log("0 index의 innerText : ",document.querySelectorAll("p")[0].innerText);
// 돔 엘리먼트 배열에 0번째 인덱스에 innerText 값을 보는 것.
console.log("1 index의 innerText : ",document.querySelectorAll("p")[1].innerText);
console.log("2 index의 innerText : ",document.querySelectorAll("p")[2].innerText);
console.log("3 index의 innerText : ",document.querySelectorAll("p")[3].innerText);

document.querySelectorAll("p")[0].style.color = "red";
// document.querySelectorAll("p")[0]
// 여러개의 p 태그 중에서 0번째 p태그를 선택한다.
// 0번째 p 태그의 색을 red로 바꾼 것.
// 전체 p 태그를 바꾸기 위해서는 반복문 or 하나하나씩 red로 바꿔 줘야 한다.

// d3로 여러개를 선택을 해 보자.
console.log("select all p tag : ", d3.selectAll("p"));

d3.selectAll("p").style("color", "red");
// d3에서는 전체를 한꺼번에 바꿀 수 있도록 함수를 만들어서 제공한다.

d3.selectAll("p").style("color", "#0000ff");

// 넣었던 색을 지우고 싶을 때
d3.selectAll("p").style("color", null);

// vanilla js : document.createElement('div');
console.log("js div : ", document.createElement('div'));
console.log("d3 div : ", d3.create("div"));
// 돔 엘리먼트가 똑같지 않다. vanilla js와 d3는 다르다.


var jsDiv = document.createElement('div');
jsDiv.innerHTML = "vanilla js div";
console.log(jsDiv);
document.body.appendChild(jsDiv);

var d3Div = d3.create("div");
d3Div.html("d3 div");
document.body.appendChild(d3Div.node());
// d3Div.node() d3js의 가상 돔 객체가 가진 node 함수를 사용하면
// d3js의 가상 돔 엘리먼트가 vanilla js의 가상 돔 엘리먼트로 바뀐다.



// Chaining Methods
console.log("Hello World"); // 결과는 문자열
console.log("Hello World".toLowerCase()); // 결과는 문자열
console.log("Hello World".replace(" ", "-"));
console.log("Hello World".toLowerCase().replace(" ", "-"));
// .어쩌구.어쩌구.어쩌구 계속 쓰는 방식이 메서드 체인이다.
// 계속 같은 문자열이 나와야 쓸 수 있다. (예외도 있음)

var d3Span = d3.create("span")
    .style("color", "white")
    .style("background-color", "black")
    .html("Hello, world!")
    .node();

// d3.create("span") d3의 돔 엘리먼트를 만든 것.
console.log("d3 span : ", d3.create("span"));
// d3.create("span").style("color", "white") 이 결과도 d3의 돔 엘리먼트
console.log("d3 span : ", d3.create("span").style("color", "white"));
// d3의 돔 엘리먼트 표현 : ut {_groups: Array(1), _parents: Array(1)}
console.log("d3 span : ", d3.create("span").style("color", "white").style("background-color", "black"));
// d3의 돔 엘리먼트의 메서드 체이닝
console.log("d3 span : ", d3.create("span").style("color", "white").style("background-color", "black").html("Hello, world!"));
// html 함수(메서드)를 사용한 결과도 d3의 돔 엘리먼트이다.

// 그런데 d3의 돔 엘리먼트가 가진 node()란 함수는 'd3의 돔 엘리먼트'를 'vanilla js의 돔 엘리먼트로 바꾼다.'
console.log("d3 span : ", d3.create("span").style("color", "white").style("background-color", "black").html("Hello, world!").node());

// d3 라이브러리는 여러가지 기능을 가지고 있다. d3 그자체로는 돔 엘리먼트가 아니다.
// d3의 돔 엘리먼트를 만들기 위해서는 d3.create()나 d3.selectAll() 이런 함수를 써서 돔 엘리먼트를 만들어 줘야 한다.

document.body.appendChild(d3Span);
// document.body라는 돔 엘리먼트의 appendChild 함수는 vanilla js의 돔 엘리먼트만 받는다.
// node()라는 함수를 사용해서 d3의 돔 엘리먼트를 vanilla js의 돔 엘리먼트로 만들어야 document.body.appendChild를 사용할 수 있다.

// 변수에 넣어서 바꿀 수도 있다.
var span = d3.create("span");
console.log("divide");
span.style("color", "white");
span.style("background-color", "black");
span.html("Hello, world!");
console.log(span.node());

// d3.create("span").style("color", "white").style("background-color", "black").html("Hello, world!").node()
// 와 결과는 같다.

var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody)
// <table>
//   <tbody>
//   </tbody>
// </table>
// 이런 구조의 태그를 만든다.
document.body.appendChild(table);

// 바닐라 자바스크립트의 경우에는 돔 엘리먼트를 만들고 만든 것을 넣어줘야 했다면
// d3에서는 append()라는 함수를 통해서 d3의 돔 엘리먼트를 만들면서 집어 넣어 줬다.
var table = d3.create("table");
// 테이블 태그를 만든다. 태그를 d3의 돔엘리먼트로 만든다.
var tbody = table.append("tbody");
// 문자열을 집어넣는 동시에 children 태그가 들어간 상태가 됨

tbody.append("tr").append("td").text("First!");
tbody.append("tr").append("td").text("Second.");
tbody.append("tr").append("td").text("Third.");
// 는  다음과 같은 구조를 만든다. HTML에 찍히지는 않은 상태이며 d3의 돔 엘리먼트 상태이다.
// <tbody>
//  <tr>
//     <td>First!</td>
//  </tr>
//  <tr>
//     <td>Second.</td>
//  </tr>
//  <tr>
//    <td>Third.</td>
//  </tr>
// </tbody>

// 최종적인 결과
// <table>
  // <tbody>
  //  <tr>
  //     <td>First!</td>
  //  </tr>
  //  <tr>
  //     <td>Second.</td>
  //  </tr>
  //  <tr>
  //    <td>Third.</td>
  //  </tr>
  // </tbody>
// </table>

var d3Table = table.node();
console.log(d3Table);
// d3의 돔 엘리먼트를 vanilla js의 돔 엘리먼트롤 만든다.
// node 함수를 실행 '()' 해 줘야 함

document.body.appendChild(d3Table);

// 그래프의 막대 만들기
var div = document.createElement('div');
div.style.font = "10px sans-serif";
div.style.textAlign = "right";
div.style.color = "white";
console.log("vanilla js의 경우 : ", div);
// 이 아이는 하나씩 만들거나 for문을 사용해서 loop로 해야 여러개를 만들 수 있다.

var div = d3.create("div") // div 태그를 만든다. 이 태그는 d3의 돔 엘리먼트이다.
     .style("font", "10px sans-serif") // 만든 d3의 돔 엘리먼트에 스타일을 적용한다.
     .style("text-align", "right")
     .style("color", "white")
     .style("background-color", "blue")
     .html("bar-chart");

// document.body.appendChild(div.node());

// 그래프 만들기 시작

var data = [4, 8, 15, 16, 23, 42];
// var data = [10, 20, 30];

// 테두리 div를 만든다.
var div = d3.create("div")
      .style("font", "10px sans-serif")
      .style("text-align", "right")
      .style("color", "white");
// 테두리 div : <div style="font: 10px sans-serif; text-align: right; color: white;">
// 아이디 선택할 때는 #
// 클래스 선택할 때는 .

console.log(div.selectAll("div"));
// div변수(테두리 div라는 d3의 돔 엘리먼트) 안에 있는 div 태그를 대상으로 조작을 하겠다.

console.log(div.selectAll("div").data([10, 20, 30, 40, 50]));
// 빈 태그를 5개 만들었다는 의미
// 여기까지가 테두리 div
// 약간 이런 의미 (실제 HTML은 아닌 가상의 개념)
// <div style="font: 10px sans-serif; text-align: right; color: white;">
//   <></>
//   <></>
//   <></>
//   <></>
//   <></>
// </div>

console.log(div.selectAll("div").data([10, 20, 30, 40, 50]).enter());
// 만들었던 5개의 빈 태그 각가에 대해 어떻게 설정을 할지 정한다.
// 테두리 div안에 빈 태그 5개 각각에 대해 조작을 하겠다는 의미
// 테두리 div안의 하나의 빈 태그를 의미
// <></> 이것 하나 하나를 조작

//   <></>
//   <></>
//   <></>
//   <></>
//   <></>
// 총 다섯개를 동시에 조작을 한다.


console.log(div.selectAll("div").data([10, 20, 30, 40, 50]).enter().append("div"));

//   <></>
//   <></>
//   <></>
//   <></>
//   <></>
// 를
//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
// 이런 식으로 만들겠어.

console.log(div.selectAll("div")
  .data(data)
  .enter().append("div")
    .style("background", "steelblue")
    .style("padding", "3px")
    .style("margin", "1px")
    .style("width", d => `${d * 10}px`));

//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
//   <div></div>
// 가
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 40px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 80px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 150px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 160px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 230px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 420px;"></div>
// 각 div의 style을 설정한다.


console.log(div.selectAll("div")
  .data(data)
  .enter().append("div")
    .style("background", "steelblue")
    .style("padding", "3px")
    .style("margin", "1px")
    .style("width", d => `${d * 10}px`)
    .text(d => d));

// <div style="background: steelblue; padding: 3px; margin: 1px; width: 40px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 80px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 150px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 160px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 230px;"></div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 420px;"></div>
// 각각의 태그 안에 data의 수를 각각 넣어줌
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 40px;">4</div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 80px;">8</div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 150px;">15</div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 160px;">16</div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 230px;">23</div>
// <div style="background: steelblue; padding: 3px; margin: 1px; width: 420px;">42</div>



// 정리
var div = d3.create("div")
      .style("font", "10px sans-serif")
      .style("text-align", "right")
      .style("color", "white");

div.selectAll("div")
  .data(data)
  .enter().append("div")
    .style("background", "steelblue")
    .style("padding", "3px")
    .style("margin", "1px")
    .style("width", function (d) {
        // d라는 값은 위의
        // var data = [4, 8, 15, 16, 23, 42];
        // 의 각각의 값
        return `${d * 10}px`
        // 결과값은  40px, 80px, 150px, 160px ...
      }
    )
    // .style()의 두번째 인자에 문자열을 넣을 때는 문자열 그대로 세팅을 함
    // .style()의 두번째 인자에 함수를 넣을 때 (함수를 실행한 것을 넣지 않는다.)
    // 함수의 실행 결과 값을 사용한다.
    .text(function (d) {return d});
    // .text()도 첫번째 인자에 문자열을 넣을 때는 문자열 그대로 세팅
    // 함수를 넣으면 함수를 실행한 값을 넣어준다.
    // data의 각 원소를 받아서 넣어주기 위해서 이렇게 만들었다.

document.body.appendChild(div.node());
// 테두리 div를 d3 돔 엘리먼트에서 vanilla js 돔 엘리먼트로 변환했다.


// <div style="font: 10px sans-serif; text-align: right; color: white;">
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 40px;">4</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 80px;">8</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 150px;">15</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 160px;">16</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 230px;">23</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 420px;">42</div>
// </div>

// 테두리 div인 <div style="font: 10px sans-serif; text-align: right; color: white;">는
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 40px;">4</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 80px;">8</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 150px;">15</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 160px;">16</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 230px;">23</div>
//   <div style="background: steelblue; padding: 3px; margin: 1px; width: 420px;">42</div>
// 을 가지고 있기 때문에

// 테두리 div를 document.body에 달아주었다.
