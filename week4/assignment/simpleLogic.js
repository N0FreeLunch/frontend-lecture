var contents = document.createElement('content');
var prevBtn = document.createElement('button');
var nextBtn = document.createElement('button');

prevBtn.innerText = "prev page";
nextBtn.innerText = "next page";

document.body.appendChild(prevBtn);
document.body.appendChild(nextBtn);
document.body.appendChild(contents);

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
      </div>
    <div>
  `;
}


contents.innerHTML = movieContent(data[0])
                    + movieContent(data[1])
                    + movieContent(data[2])
                    + movieContent(data[3])
                    + movieContent(data[4]);


nextBtn.onclick = function () {
  // 왜 여기서는 매개변수(parameter)가 없는 이유
  // 버튼을 눌렀을 때 함수를 실행한다는 의미인데
  // 버튼을 눌를 때 값을 안 넣어 준다.
  contents.innerHTML = movieContent(data[5])
                      + movieContent(data[6])
                      + movieContent(data[7])
                      + movieContent(data[8])
                      + movieContent(data[9]);
}


var testFunc = function (num) {
  console.log("testFunc : ", num);
}

testFunc();

testFunc(1);

// onclick은 값을 넣어주지 않는다.

// 한 페이지에 5개씩 보여주면 버튼 함수의 안의 index값을 변경해야 한다는 어려움이 발생한다.

// nextBtn.onclick = function () {
//   contents.innerHTML = movieContent(data[5])
//                       + movieContent(data[6])
//                       + movieContent(data[7])
//                       + movieContent(data[8])
//                       + movieContent(data[9]);
// }
// 다음 버튼을 누르면 항상 동일한 페이지가 나오도록 10개씩 넣는 방법을 사용할 수 있다.


// 로딩 시 첫 페이지
contents.innerHTML = movieContent(data[0])
                    + movieContent(data[1])
                    + movieContent(data[2])
                    + movieContent(data[3])
                    + movieContent(data[4])
                    + movieContent(data[5])
                    + movieContent(data[6])
                    + movieContent(data[7])
                    + movieContent(data[8])
                    + movieContent(data[9]);

// 버튼 눌렀을 때 두번째 페이지
nextBtn.onclick = function () {
  contents.innerHTML = movieContent(data[10])
                      + movieContent(data[11])
                      + movieContent(data[12])
                      + movieContent(data[13])
                      + movieContent(data[14])
                      + movieContent(data[15])
                      + movieContent(data[16])
                      + movieContent(data[17])
                      + movieContent(data[18])
                      + movieContent(data[19]);
}

// 버튼 눌렀을 때 첫번째 페이지
prevBtn.onclick = function () {
  contents.innerHTML = movieContent(data[0])
                      + movieContent(data[1])
                      + movieContent(data[2])
                      + movieContent(data[3])
                      + movieContent(data[4])
                      + movieContent(data[5])
                      + movieContent(data[6])
                      + movieContent(data[7])
                      + movieContent(data[8])
                      + movieContent(data[9]);
}


// ************************************************************************

var firstPage = function () {
  contents.innerHTML = movieContent(data[0])
          + movieContent(data[1])
          + movieContent(data[2])
          + movieContent(data[3])
          + movieContent(data[4])
          + movieContent(data[5])
          + movieContent(data[6])
          + movieContent(data[7])
          + movieContent(data[8])
          + movieContent(data[9]);
}

// console.log("fist page : ", firstPage())
// 0번 부터 9번까지 합쳐진 HTLM 문자열이 나옴


var secondPage = function () {
  contents.innerHTML = movieContent(data[10])
        + movieContent(data[11])
        + movieContent(data[12])
        + movieContent(data[13])
        + movieContent(data[14])
        + movieContent(data[15])
        + movieContent(data[16])
        + movieContent(data[17])
        + movieContent(data[18])
        + movieContent(data[19]);
}

// 로딩 시 첫 페이지
firstPage();

// 버튼 눌렀을 때 두번째 페이지
nextBtn.onclick = secondPage;

// 버튼 눌렀을 때 첫번째 페이지
prevBtn.onciick = firstPage;


// ************************************************************************
// 반복문 사용

// 로딩 시 첫 페이지
var pageContents = "";
for (var i = 0; i < 10; i++) {
  pageContents = pageContents + movieContent(data[i]);
}

contents.innerHTML = pageContents;

// 버튼 눌렀을 때 첫번째 페이지
prevBtn.onclick = function () {
  var pageContents = "";
  for (var i = 0; i < 10; i++) {
    pageContents = pageContents + movieContent(data[i]);
  }
  contents.innerHTML = pageContents;
}

// 버튼 눌렀을 때 두번째 페이지
nextBtn.onclick = function () {
  var pageContents = "";
  for (var i = 10; i < 20; i++) {
    pageContents = pageContents + movieContent(data[i]);
  }
  contents.innerHTML = pageContents;
}


// ************************************************************************

var firstPage = function () {
  var pageContents = "";
  for (var i = 0; i < 10; i++) {
    pageContents = pageContents + movieContent(data[i]);
  }
  contents.innerHTML = pageContents;
  // 문자열을 만들고 페이지에 넣어주는 로직
}

var secondPage = function () {
  var pageContents = "";
  for (var i = 10; i < 20; i++) {
    pageContents = pageContents + movieContent(data[i]);
  }
  contents.innerHTML = pageContents;
  // 문자열을 만들고 페이지에 넣어주는 로직
}

// 로딩 시 첫 페이지
firstPage();

// 버튼 눌렀을 때 첫번째 페이지
prevBtn.onclick = function () {
  firstPage();
}

// 버튼 눌렀을 때 두번째 페이지
nextBtn.onclick = function () {
  secondPage();
}


// ************************************************************************


var firstPage = function () {
  var pageContents = "";
  for (var i = 0; i < 10; i++) {
    pageContents = pageContents + movieContent(data[i]);
  }
  return pageContents;
  // 문자열을 만들고 페이지에는 안 넣어줌 아직
}

var secondPage = function () {
  var pageContents = "";
  for (var i = 10; i < 20; i++) {
    pageContents = pageContents + movieContent(data[i]);
  }
  return pageContents;
  // 문자열을 만들고 페이지에는 안 넣어줌 아직
}

// 로딩 시 첫 페이지
contents.innerHTML = firstPage();

// 버튼 눌렀을 때 첫번째 페이지
prevBtn.onclick = function () {
  contents.innerHTML = firstPage();
}

// 버튼 눌렀을 때 두번째 페이지
nextBtn.onclick = function () {
  contents.innerHTML = secondPage();
}
