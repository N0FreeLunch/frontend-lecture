console.log("지브리 코드 : ", data);

// 가상 돔을 만든다.
var contents = document.createElement('content');
var prevBtn = document.createElement('button');
var nextBtn = document.createElement('button');

// 버튼 이름을 추가한다.
prevBtn.innerText = "prev page";
nextBtn.innerText = "next page";

// body 태그에 달아 준다. 순서대로
// 만든 순서에 상관 없이 넣는 순서에 따라 넣어진다.
document.body.appendChild(prevBtn);
document.body.appendChild(nextBtn);
document.body.appendChild(contents);

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

console.log("literalObject의 description key를 선택 : ", literalObject.description);

console.log("index 0 : ", data[0]);
console.log("index 0 title : ", data[0].title);

console.log("index 2 title : ", data[2].title);
console.log("index 2 director : ", data[2].director);


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


console.log("long : ", movieContent(data[0]));
// contents.innerHTML = movieContent(data[0]) + movieContent(data[1]) + movieContent(data[2]) + movieContent(data[3]) + movieContent(data[4]);

console.log("data length : ", data.length);
// var sumMovieContents = "";
// for (var i = 0; i < data.length; i++) {
//   sumMovieContents = sumMovieContents + movieContent(data[i]);
// }
// console.log(sumMovieContents);
//
// contents.innerHTML = sumMovieContents;


var onePage = function (startIndex, endIndex) {
  var sumMovieContents = "";
  for (var i = startIndex; i < endIndex; i++) {
    sumMovieContents = sumMovieContents + movieContent(data[i]);
  }
  return sumMovieContents;
}

contents.innerHTML = onePage(0,4);

var btnClick = function () {
  contents.innerHTML = onePage(5,9);
}

nextBtn.onclick = btnClick;
