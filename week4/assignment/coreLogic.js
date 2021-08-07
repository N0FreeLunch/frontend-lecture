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
    </div>
  `;
}

// 페이지 넘버에 따라서 몇 번 인덱스 부터 몇 번 인덱스까지 보여줄지를 정하는 로직이 필요했다.

var pageNum = 1;
var onpageTotalIndex = 5;

var onePage = function (pageNum) {
  var startIndex = (pageNum - 1) * 5;
  var endIndex = pageNum * 5;
  var sumMovieContents = "";
  for (var i = startIndex; i < endIndex; i++) {
    if(i < data.length){
      sumMovieContents = sumMovieContents + movieContent(data[i]);
    }
  }
  return sumMovieContents;
}


var nextPagenation = function () {
  if(pageNum * onpageTotalIndex < data.length){
    pageNum = pageNum + 1;
    console.log("pageNum : ", pageNum);
    contents.innerHTML = onePage(pageNum);
  }
}

nextBtn.onclick = nextPagenation;


var prevPagenation = function () {
  if(pageNum > 1){
    pageNum = pageNum - 1;
    contents.innerHTML = onePage(pageNum);
  }
}

prevBtn.onclick = prevPagenation;

contents.innerHTML = onePage(pageNum);
