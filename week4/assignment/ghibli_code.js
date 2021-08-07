console.log("지브리 코드 : ", data);

// 가상 돔을 만든다.
var contents = document.createElement('content');
var prevBtn = document.createElement('button');
var nextBtn = document.createElement('button');
// 자바스크립트 안에 있는 돔 엘리먼트이다.
// 돔 : 자바스크립트 안의 태그 집합
// 엘리먼트 : 원소라는 의미 : 태그 집합의 하나의 원소 = 태그
// 돔 엘리먼트는 자바스크립트에서 모든 태그 집합안의 하나의 태그
// 돔 엘리먼트 = 노드, Node라고도 표현한다.

// 버튼 이름을 추가한다.
prevBtn.innerText = "prev page";
nextBtn.innerText = "next page";
// 이렇게 이름을 추가한다고 그냥 알고 있으면 된다.

// body 태그에 자바스크립트 상의 돔 엘리먼트를 달아 준다. 순서대로
// 만든 순서에 상관 없이 넣는 순서에 따라 넣어진다.
document.body.appendChild(prevBtn);
document.body.appendChild(nextBtn);
document.body.appendChild(contents);

// 버튼에 onclick 어트리뷰트를 달아 줘야 한다.
prevBtn.onclick = function () {
  alert("prevBtn");
}
// 페이지를 변경하는 것이다.
// 페이지를 변경하는 함수를 만들어 줘야 한다.
// 페이지를 변경하는 함수를 만들고 나서 prevBtn.onclick에 함수를 넣어준다.
// 이 작업이 자바스크립트 코드 한참아래에서 이뤄지는 이유
// 페이지를 변경하는 함수를 만들고 나서 prevBtn.onclick에 함수를 넣어준다.


// {} 안에 key : vlaue 형식으로 써 넣을 것을 literal object라고 한다.
var literalObject = {
  title: "Castle in the Sky",
  description:
    "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  release_date: "1986",
  director: "Hayao Miyazaki",
  producer: "Isao Takahata",
};

console.log("literalObject : ", literalObject);
console.log("literalObject의 title key를 선택 : ", literalObject.title);
// 객체라서 뭔가를 가지고 있다고 title, description, release_date, director, producer

console.log("literalObject의 title key를 배열형식으로 선택 : ", literalObject["title"]);

console.log("literalObject의 description key를 선택 : ", literalObject.description);
console.log("literalObject의 description key를 배열 형식으로 선택 : ", literalObject["description"]);

console.log("index 0 : ", data[0]);
console.log("index 0 title : ", data[0].title);

console.log("index 2 title : ", data[2].title);
console.log("index 2 director : ", data[2].director);

// 백틱을 사용해서 HTML 코드를 문자열로 적어 줄 수 있다
// ${} 표현 안에 자바스크립트 코드를 넣을 수 있다.
// 문자열이 아니라 js 코드의 결과를 보여주고 싶을 때 ${}을 사용한다.
var sampleHTML = `
  <div>
    <div>
      <h1>${data[0].title}</h1>
    </div>
    <div>
      <span style="margin-right: 25px;">
        release_date : ${data[0].release_date}
      </span>
      <span style="margin-right: 25px;">
        director : ${data[0].director}
      </span>
      <span>
        producer : ${data[0].producer}
      </span>
    </div>
    <br>
    <div>
      <div style="font-size : 20px;">${data[0].description}</div>
    </div>
  </div>
`;

console.log("sampleHTML : ", sampleHTML);

// 태그 문자열을 넣을 때는 '돔 엘리먼트'.innerHTML을 사용한다.
// 태그는 변환이 된다.
contents.innerHTML = "<h1>h1태그</h1>";

contents.innerText = "<h1>h1태그</h1>";
// innerText는 기존 내용을 변경한다. 덮어 씌워 버린다.

contents.innerHTML = sampleHTML;
// innerHTML는 기존 내용을 변경한다. 덮어 씌워 버린다.

// document.body.appendChild는 덮어 씌우지 않고 document.body의 자식태그의 마지막에 추가한다.


// sampleHTML에는 data[0]에 대한 정보만 넣어 줬다.
// sampleHTML에는 data[1], data[2], data[3] ...에 대한 정보도 넣고 싶다.
// sampleHTML를 복붙해서 data[0]을 data[1]으로 바꿀 수도 있다.
// 복붙 말고 자동화를 하자.


// oneMovieData에는 data[1], data[2], data[3] ...을 넣을 수 있다.
var movieContent = function (oneMovieData) {
  return `
    <div>
      <div>
        <h1>${oneMovieData.title}</h1>
      </div>
      <div>
        <span style="margin-right: 25px;">
          release_date : ${oneMovieData.release_date}
        </span>
        <span style="margin-right: 25px;">
          director : ${oneMovieData.director}
        </span>
        <span>
          producer : ${oneMovieData.producer}
        </span>
      </div>
      <br>
      <div>
        <div style="font-size : 20px;">${oneMovieData.description}</div>
      <div>
    <div>
  `;
}

console.log("movieContent 0 : ", movieContent(data[0]));
console.log("movieContent 1 : ", movieContent(data[1]));
console.log("movieContent 2 : ", movieContent(data[2]));

// 20개의 데이터를 나열하기 힘들다.
contents.innerHTML = movieContent(data[0]) + movieContent(data[1]) + movieContent(data[2]) + movieContent(data[3]) + movieContent(data[4]);

// 그래서 for문을 돌린다.
// console.log("data length : ", data.length);
// movieContent의 리턴 값은 문자열이다.
// 문자열을 계속 더해주면 20개의 문자가 연결되어 나타난다.
var sumMovieContents = "";
for (var i = 0; i < data.length; i++) {
  sumMovieContents = sumMovieContents + movieContent(data[i]);
}
console.log(sumMovieContents);

contents.innerHTML = sumMovieContents;

// 한 페이지에 20개가 아닌 5개씩 보여주고 싶다.

var onePage = function (startIndex, endIndex) {
  var sumMovieContents = "";
  for (var i = startIndex; i < endIndex; i++) {
    sumMovieContents = sumMovieContents + movieContent(data[i]);
  }
  return sumMovieContents;
}

// 5개씩 만들기 위해서는
// startIndex = 0, endIndex= 5
// startIndex = 5, endIndex= 10
// startIndex = 10, endIndex= 15
// startIndex = 15, endIndex= 20

contents.innerHTML = onePage(0,5);
contents.innerHTML = onePage(5,10);
contents.innerHTML = onePage(10,15);
contents.innerHTML = onePage(15,20);

// startIndex = 0, endIndex= 5일때의 값을 페이지를 로딩한 후 표시
contents.innerHTML = onePage(0,5); // 이 부분 때문에 처음 페이지가 항상 5개씩 나온다.

nextBtn.onclick= function () {
  contents.innerHTML = onePage(5,10);
}
// 함수에 넣은 것은 버튼을 눌러야 실행이 된다. 함수를 실행해야 하기 때문에

nextBtn.onclick= function () {
  contents.innerHTML = onePage(10,15);
}

// 버튼에 넣는 함수에 따라 페이지가 달리지는 것을 알 수 있다.
// innerHTML으로 덮어 쓰기를 하기 있기 때문

// 누를 때 마다 처음에는 onePage(5,10)로 바뀌고 다음 번 누를 때는 onePage(10,15)로 바뀌게 만들고 싶다.

var pageStart = 5;
var pageEnd = 10;
var pagenation = function () {
  contents.innerHTML = onePage(pageStart,pageEnd);
  pageStart = pageStart + 5;
  pageEnd = pageEnd + 5;
}

// 처음 클릭할 때 pageStart = 5, pageEnd = 10
// 두 번째 클릭할 때 pageStart = 10, pageEnd = 15
// 세 번째 클릭할 때 pageStart = 15, pageEnd = 20
// 네 번째 클릭할 때 pageStart = 20, pageEnd = 25

// pageEnd는 pageStart보다 항상 5가 많다.
// pageEnd는 pageStart로 나타낼 수 있다.
var pageStart = 5;
var pagenation = function () {
  contents.innerHTML = onePage(pageStart,pageStart + 5);
  pageStart = pageStart + 5;
}
nextBtn.onclick = pagenation;

// pageStart를 startIndex으로 바꿔서 변수의 의미를 명확하게 하자.
var startIndex = 5;
var pagenation = function () {
  contents.innerHTML = onePage(startIndex, startIndex + 5);
  startIndex = startIndex + 5;
}
nextBtn.onclick = pagenation;

// startIndex + 5는 data.length 보다 작아야 한다.

var startIndex = 5;
var pagenation = function () {
  if(startIndex + 5 < data.length){
    contents.innerHTML = onePage(startIndex, startIndex + 5);
    startIndex = startIndex + 5;
  }
}
nextBtn.onclick = pagenation;

// if문 안썼으면 에러남


var startIndex = 2;
var pagenation = function () {
  if(startIndex + 5 < data.length){
    contents.innerHTML = onePage(startIndex, startIndex + 5);
    startIndex = startIndex + 5;
  }
}
nextBtn.onclick = pagenation;
// 처음 2 클릭 하고 7 클릭하고 12 클릭하고 17
// startIndex + 5 값이 17이 되면 다음페이지를 못 넘어간다.
// 인덱스 17, 18, 19가 다음 페이지에 나타나지 않는다.
// pagenation 함수 안에 if문을 거는 것이 아닌 onePage 안에 if문을 넣어준다.

// 작품 하나하나에 대해서 인덱스가 얼마 이상이면 작품 스크립트를 안 만들게 해야함
// pagenation 에 제한을 거는 것이 아니라 얘는 제한이 없고
// 작품 하나하나가 표시되는 것만 인덱스 얼마(20) 이상이면 나오지 않게 하자.


var onePage = function (startIndex, endIndex) {
  var sumMovieContents = "";
  for (var i = startIndex; i < endIndex; i++) {
    if(i < data.length){
      sumMovieContents = sumMovieContents + movieContent(data[i]);
    }
  }
  return sumMovieContents;
}

// 애는 무한으로 변경 되고
var startIndex = 2;
var pagenation = function () {
  contents.innerHTML = onePage(startIndex, startIndex + 5);
  startIndex = startIndex + 5;
}
nextBtn.onclick = pagenation;

// 빈 페이지가 나와서 빈 페이지가 안 나오게 만들어야 한다.
var startIndex = 2;
var pagenation = function () {
  if(startIndex < data.length){ // 이 부분을 추가
    contents.innerHTML = onePage(startIndex, startIndex + 5);
    startIndex = startIndex + 5;
  }
}
nextBtn.onclick = pagenation;

// 한 페이지에 5말고 다른 수가 나오도록 만들고 싶다.


var startIndex = 2;
var onpageTotalIndex = 4;
var pagenation = function () {
  if(startIndex < data.length){ // 이 부분을 추가
    contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
    startIndex = startIndex + onpageTotalIndex;
  }
}

nextBtn.onclick = pagenation;

// 이거는 그냥 해본다.

var upgradePagenation = function (startIndex, onpageTotalIndex) {
  contents.innerHTML = onePage(0,startIndex); // 실행이 된다.
  return function () {
    if(startIndex < data.length){ // 이 부분을 추가
      contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
      startIndex = startIndex + onpageTotalIndex;
    }
  }
}

nextBtn.onclick = upgradePagenation(3,6);
console.log("is it function ? : ",upgradePagenation(3,6));
// 함수를 리턴한다.
// upgradePagenation(3,6) 를 실행을 하면 함수가 나온다.
// 실행한 함수를 넣어도 함수가 된다.
// 실행이 되면서 contents.innerHTML = onePage(0,5);를 실행하여 처음 페이지가 세팅이 된다.

// 처음 3개가 나옴 6개 나옴 6개 나옴 5개 나옴 = 20개
// contents.innerHTML = onePage(0,startIndex);를 넣으면 첫 페이지 작품수를 세팅할 수 있다.

nextBtn.onclick = upgradePagenation(4,6);
// 기능을 만들면 (함수를 만들면) 기능 단위로 생각하면 된다. 모든 코드를 머릿속에 넣는 것이 아니라


// 이전으로 가기 버튼 만들기 prevBtn

var onePage = function (startIndex, endIndex) {
  var sumMovieContents = "";
  for (var i = startIndex; i < endIndex; i++) {
    if(i < data.length){
      sumMovieContents = sumMovieContents + movieContent(data[i]);
    }
  }
  return sumMovieContents;
}

// 처음 페이지에 15이상 20미만
contents.innerHTML = onePage(15,20);

// prevBtn 버튼을 눌렀을 때 앞페이지로 이동하게 만들면 된다.

// 여기서 부터 새로 시작
contents.innerHTML = onePage(0,5);
var startIndex = 5;
var onpageTotalIndex = 5;
var pagenation = function () {
  if(startIndex < data.length){ // 이 부분을 추가
    contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
    startIndex = startIndex + onpageTotalIndex;
  }
}

// contents.innerHTML = onePage(0,5); // 처음 페이지에 0번부터 5번까지 표시하라
// var startIndex = 5; // 버튼을 누를 때 몇번 인덱스 부터 시작할지
// var onpageTotalIndex = 5; // 버튼을 누를 때, 한 페이지에 나타낼 movie의 수

// 버튼을 누르지 않았을 때 => 처음 페이지에 0번부터 5번까지 표시하라
// 버튼을 한 번째 눌렀을 때 => startIndex = 5
// 버튼을 두 번째 눌렀을 때 =>
// startIndex = startIndex + onpageTotalIndex;에 의해서 startIndex = 10
// 버튼을 세 번째 눌렀을 때 => startIndex = 15
// 버튼을 네 번째 눌렀을 때 => startIndex = 20
// if(startIndex < data.length){ 조건에 의해서
// 더이상 onePage를 실행하지 않는다.

nextBtn.onclick = pagenation;

// 현재 페이지를 표시하고 싶다.
// 페이지를 저장하는 변수를 하나 만들꺼야
pageNum.innerText = 1;


var startIndex = 5;
var onpageTotalIndex = 5;
var pagenation = function () {
  if(startIndex < data.length){ // 이 부분을 추가
    contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
    startIndex = startIndex + onpageTotalIndex;
    pageNum.innerText = pageNum.innerText + 1; // pageNum.innerText는 문자열이다.
  }
}

nextBtn.onclick = pagenation;


var startIndex = 5;
var onpageTotalIndex = 5;
var pagenation = function () {
  if(startIndex < data.length){ // 이 부분을 추가
    contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
    startIndex = startIndex + onpageTotalIndex;
    pageNum.innerText = Number(pageNum.innerText) + 1; // Number(pageNum.innerText) 수이다.
  }
}

nextBtn.onclick = pagenation;

var prevPagenation = function () {
    pageNum.innerText = Number(pageNum.innerText) - 1;
}

prevBtn.onclick = prevPagenation;


contents.innerHTML = onePage(0,5);
var startIndex = 5;
var onpageTotalIndex = 5;
var pagenation = function () {
  if(startIndex < data.length){ // 이 부분을 추가
    contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
    console.log("이전 startIndex in nextPagenation : ", startIndex);
    startIndex = startIndex + onpageTotalIndex;
    console.log("이후 startIndex in nextPagenation : ", startIndex);
  }
}

nextBtn.onclick = pagenation;


// contents.innerHTML = onePage(0,5); // 처음 페이지에 0번부터 5번까지 표시하라
// var startIndex = 5; // 버튼을 누를 때 몇번 인덱스 부터 시작할지
// var onpageTotalIndex = 5; // 버튼을 누를 때, 한 페이지에 나타낼 movie의 수

// 버튼을 누르지 않았을 때 => 처음 페이지에 0번부터 5번까지 표시하라
// 버튼을 한 번째 눌렀을 때 => startIndex = 5
// 버튼을 두 번째 눌렀을 때 =>
// startIndex = startIndex + onpageTotalIndex;에 의해서 startIndex = 10
// 버튼을 세 번째 눌렀을 때 => startIndex = 15
// 버튼을 네 번째 눌렀을 때 => startIndex = 20
// if(startIndex < data.length){ 조건에 의해서
// 더이상 onePage를 실행하지 않는다.


// 다음 버튼을 네번 누른 상태에서 startIndex = 20 인 상태
// 이전 버튼을 눌렀을 때 startIndex = 15가 되어야 한다.

var prevPagenation = function () {
    contents.innerHTML = onePage(startIndex, startIndex + onpageTotalIndex);
    console.log("이전 startIndex in prevPagenation : ", startIndex);
    startIndex = startIndex - onpageTotalIndex;
    console.log("이후 startIndex in prevPagenation : ", startIndex);
}

prevBtn.onclick = prevPagenation;


// 1 page : 0 - 4 // startIndex = 0
// 2 page : 5 - 9 // startIndex = 5 -> 10
// 3 page : 10 - 14 // startIndex = 10 -> 15
// 4 page : 15 - 19 // startIndex = 15 -> 20
// 3 page : 10 - 14 // startIndex = 20 -> 15 // 15에서 10으로 값이 바뀌어야 되는데 20 -> 15이 되고 있다.
// 2 page : 5 - 9
// 1 page : 0 - 4

// startIndex 번호로 생각을 해서 이런 문제가 생겼다.

// 페이지 번호로 생각을 하자.

//
var pageNum = 1;
// pageNum = 1 => 0번 부터 4번 인덱스까지
var onpageTotalIndex = 5;

var onePage = function (pageNum) {
  startIndex = (pageNum - 1) * 5;
  endIndex = pageNum * 5;
  var sumMovieContents = "";
  for (var i = startIndex; i < endIndex; i++) {
    if(i < data.length){
      sumMovieContents = sumMovieContents + movieContent(data[i]);
    }
  }
  return sumMovieContents;
}

// pageNum = 1 일때 startIndex = 0, endIndex = 5
// pageNum = 2 일때 startIndex = 5, endIndex = 10
// pageNum = 3 일때 startIndex = 10, endIndex = 15
// pageNum = 4 일때 startIndex = 20, endIndex = 25
// pageNum = 5 일때 startIndex = 25, endIndex = 30

contents.innerHTML = onePage(1);
contents.innerHTML = onePage(2);
contents.innerHTML = onePage(3);
contents.innerHTML = onePage(4);
contents.innerHTML = onePage(5);

var pageNum = 1;
var onpageTotalIndex = 5;
contents.innerHTML = onePage(pageNum);

var nextPagenation = function () {
  pageNum = pageNum + 1;
  contents.innerHTML = onePage(pageNum);
}

nextBtn.onclick = nextPagenation;

var nextPagenation = function () {
  if(pageNum * onpageTotalIndex < data.length){
    // pageNum이 4가 되었을 때는 더 이상 실행을 하지 않는다.
    pageNum = pageNum + 1;
    console.log("pageNum : ", pageNum);
    contents.innerHTML = onePage(pageNum);
  }
}

nextBtn.onclick = nextPagenation;

var prevPagenation = function () {
  if(pageNum * onpageTotalIndex <= data.length){
    // pageNum이 4가 되었을 때도 실행을 해야 한다.
    pageNum = pageNum - 1;
    contents.innerHTML = onePage(pageNum);
  }
}

prevBtn.onclick = prevPagenation;



var prevPagenation = function () {
  if(pageNum > 1){
    // pageNum이 4가 되었을 때도 실행을 해야 한다.
    // &&는 동시에 만족해야 한다.
    pageNum = pageNum - 1;
    contents.innerHTML = onePage(pageNum);
  }
}

prevBtn.onclick = prevPagenation;
