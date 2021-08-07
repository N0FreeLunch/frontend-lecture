var contents = document.createElement('content');
var page1Btn = document.createElement('button');
var page2Btn = document.createElement('button');
var page3Btn = document.createElement('button');
var page4Btn = document.createElement('button');
// 변수는 가능하면 첫 글자를 문자로 쓴다. 숫자 X
var currentPage = document.createElement('div');

page1Btn.innerText = "1 page";
page2Btn.innerText = "2 page";
page3Btn.innerText = "3 page";
page4Btn.innerText = "4 page";

currentPage.id = "currentPage";
contents.id = "unique-container";
// id 만들때는 띄어쓰기 X

document.body.appendChild(page1Btn);
document.body.appendChild(page2Btn);
document.body.appendChild(page3Btn);
document.body.appendChild(page4Btn);
document.body.appendChild(currentPage);
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
    </div>
  `;
}

currentPage.innerText = "1 page";
contents.innerHTML = movieContent(data[0])
                    + movieContent(data[1])
                    + movieContent(data[2])
                    + movieContent(data[3])
                    + movieContent(data[4]);

page1Btn.onclick = function () {
  currentPage.innerText = "1 page";
  contents.innerHTML = movieContent(data[0])
                      + movieContent(data[1])
                      + movieContent(data[2])
                      + movieContent(data[3])
                      + movieContent(data[4]);
}

page2Btn.onclick = function () {
  currentPage.innerText = "2 page";
  contents.innerHTML = movieContent(data[5])
                      + movieContent(data[6])
                      + movieContent(data[7])
                      + movieContent(data[8])
                      + movieContent(data[9]);
}


page3Btn.onclick = function () {
  currentPage.innerText = "3 page";
  contents.innerHTML = movieContent(data[10])
                      + movieContent(data[11])
                      + movieContent(data[12])
                      + movieContent(data[13])
                      + movieContent(data[14]);
}


page4Btn.onclick = function () {
  currentPage.innerText = "4 page";
  contents.innerHTML = movieContent(data[15])
                      + movieContent(data[16])
                      + movieContent(data[17])
                      + movieContent(data[18])
                      + movieContent(data[19]);
}

// 제출 전에 배열 array iterator 돌려야 함.
