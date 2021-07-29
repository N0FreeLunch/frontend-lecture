// 문제의 목표 : 문자 바꾸기
// 주어진 문자를
console.log("Lorem Ipsum");
// 이런 형태로 바꾸세요
console.log("lorem-ipsum");

// 함수
// 값을 집어 넣으면 결과 값이 나오는 거야
var func = function (input) {
  return input;
}
// 값을 집어 넣는 부분 : (input)
// 결과 값이 나오는 부분  : return input;

console.log("use return", func("값"));
// 이거랑
console.log("값");
// 이것은 거의 같다


var func = function (input) {
}

console.log("no return : ", func("값"));

// 글자 하나하나를 바꾼다
console.log("Lorem Ipsum"[0]);
console.log("Lorem Ipsum"[1]);
console.log("Lorem Ipsum"[2]);

// 예제
"L-o-r-e-m- -I-p-s-u-m-"

var example = "Lorem Ipsum";
var result = "";

console.log("first spell : ", "Lorem Ipsum"[0]);
result = "Lorem Ipsum"[0] + "-";
console.log("change spell : ",result);
result = "Lorem Ipsum"[1] + "-";
console.log("change spell : ", result);

// result에 값을 추가하는 방법
var result = "";
console.log("초기화 : ", result);

result = result + "Lorem Ipsum"[0] + "-";
console.log("sum spell : ",result);

result = result + "Lorem Ipsum"[1] + "-";
console.log("sum spell : ",result);

result = result + "Lorem Ipsum"[2] + "-";
console.log("sum spell : ",result);

result = result + "Lorem Ipsum"[3] + "-";
console.log("sum spell : ",result);

// 대문자를 소문자로 바꾸기
var alphabet = "ABCDEF";
// 문자가 가지고 있는 고유한 번호가 있다.
// https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/charAt
console.log("charAt : ", "ABCDEF".charCodeAt(0));
console.log("charAt : ", "ABCDEF".charCodeAt(1));
console.log("charAt : ", "ABCDEF".charCodeAt(2));
console.log("charAt : ", "가나다라마바사".charCodeAt(0));

console.log("charAt : ", "abcdef".charCodeAt(0));
console.log("charAt : ", "abcdef".charCodeAt(1));
console.log("charAt : ", "abcdef".charCodeAt(2));

// 대문자 숫자 65, 66, 67 ...
// 소문자 숫자 97, 98, 99 ...
// 차이가 32
console.log("index 0 code num : ", alphabet.charCodeAt(0));
console.log(alphabet.charCodeAt(0)+32);
// https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
console.log(String.fromCharCode(97));

console.log("convertA : ", alphabet[0]);
console.log("convertA : ", alphabet.charCodeAt(0));
console.log("convertA : ", alphabet.charCodeAt(0)+32);
console.log("convertA : ", String.fromCharCode(alphabet.charCodeAt(0)+32));

console.log("convertB : ", alphabet[1]);
console.log("convertB : ", alphabet.charCodeAt(1));
console.log("convertB : ", alphabet.charCodeAt(1)+32);
console.log("convertB : ", String.fromCharCode(alphabet.charCodeAt(1)+32));


// 함수를 만들어 보자.
var convertSpell = function (str, idx) {
  return str[idx];
}

console.log("convert function : ", convertSpell("ABCDEF",0));


var convertSpell = function (str, idx) {
  return str.charCodeAt(idx);
}

console.log("convert function : ", convertSpell("ABCDEF",0));

var convertSpell = function (str, idx) {
  return str.charCodeAt(idx) + 32;
}

console.log("convert function : ", convertSpell("ABCDEF",0));

var convertSpell = function (str, idx) {
  return String.fromCharCode(str.charCodeAt(idx) + 32);
}

console.log("convert function : ", convertSpell("ABCDEF",0));

var upperToLower = function (str, idx) {
  return String.fromCharCode(str.charCodeAt(idx) + 32);
}

var result = "";
result = result + upperToLower("A",0);
console.log("upperToLower : ", result);
result = result + upperToLower("B",0);
console.log("upperToLower : ", result);
result = result + upperToLower("C",0);
console.log("upperToLower : ", result);
result = result + upperToLower("D",0);
console.log("upperToLower : ", result);

var result = "";
var alphabet = "ABCDEF";
result = result + upperToLower(alphabet,0);
console.log("upperToLower : ", result);
result = result + upperToLower(alphabet,1);
console.log("upperToLower : ", result);
result = result + upperToLower(alphabet,2);
console.log("upperToLower : ", result);
result = result + upperToLower(alphabet,3);
console.log("upperToLower : ", result);

// array.legnth : 배열의 길이
console.log("length : ", alphabet.length);

// 반복문 사용
for (var i = 0; i < alphabet.length; i++) {
  console.log("loop : ", alphabet[i]);
}

for (var i = 0; i < alphabet.length; i++) {
  console.log("upperToLower loop : ", upperToLower(alphabet, i));
}

var sumSepll = "";
for (var i = 0; i < alphabet.length; i++) {
  sumSepll = sumSepll + upperToLower(alphabet, i);
  console.log("sumSepll : ", sumSepll);
}
console.log("sumSepll result : ",sumSepll);

var allUpperToLower = function (upperCase) {
  var sumSepll = "";
  for (var i = 0; i < upperCase.length; i++) {
    sumSepll = sumSepll + upperToLower(upperCase, i);
  }
  return sumSepll;
}

console.log("allUpperToLower function : ", allUpperToLower("EFDSFVESSD"));


console.log("convertA : ", "A".charCodeAt(0));
console.log("convertA : ", "Z".charCodeAt(0));


console.log("compare : ", 1 > 2);
console.log("compare : ", 3 > 2);
if(1 > 2) {
  console.log("1 > 2");
}

if(3 > 2) {
  console.log("3 > 2");
}

// && : AND 모두 참일 때 true
console.log("&& : ", true && true);
console.log("&& : ", true && false);
console.log("&& : ", true && true && true && true && true && true && true);
console.log("&& : ", true && true && true && false && true && true && true);

// || : OR 하나라도 참이면 true
console.log("|| : ", true || true);
console.log("|| : ", true || false);
console.log("|| : ", true || true || true || true || true || true || true || true);
console.log("|| : ", true || true || true || false || true || true || true || true);
console.log("|| : ", false || false || false || false || false || false || false || false);

var testNumber = 66;
// 65이상이고 90이하인 수를 찾는 방식
console.log(testNumber >= 65 && testNumber <= 90);
if(testNumber >= 65 && testNumber <= 90) {
  console.log("조건을 만족합니다.");
}else {
  console.log("조건을 민족하지 않습니다.");
}


var upperToLower = function (str, idx) {
  // str을 넣으면 그 문자열의 idx번재 인덱스를 대문자에서 소문자로 변경해서 리턴한다.
  if(str.charCodeAt(idx) >= 65 && str.charCodeAt(idx) <= 90) {
    // if문의 의미 문자 번호가 65이상 90이하인 것만 실행
    // 대문자일 경우에만 소문자로 바꾸고
    return String.fromCharCode(str.charCodeAt(idx) + 32);
  } else {
    // else 그렇지 않으면
    // 대문자가 아닐 경우에는 그냥 값을 원래 값을 내보낸다.
    return str[idx];
  }
}


// 인덱스 0 부터 마지막 인덱스까지
var allUpperToLower = function (upperCase) {
  var sumSepll = "";
  for (var i = 0; i < upperCase.length; i++) {
    sumSepll = sumSepll + upperToLower(upperCase, i);
  }
  return sumSepll;
}

console.log("allUpperToLower function : ", allUpperToLower("EFDSdbESSD"));

console.log("space code : ", " ".charCodeAt(0));


var spaceToHyphen = function (spell) {
  if(spell.charCodeAt(0) == 32) {
    return "-";
  } else {
    return spell;
  }
}

console.log(spaceToHyphen("H"));
console.log(spaceToHyphen(" "));

var allSpaceToHyphen = function (str) {
  // Lorem : 5
  // 01234
  for (var i = 0; i < str.length; i++) {
    console.log("check for : ", str[i]);
  }
}

allSpaceToHyphen("Lorem Ipsum");


var allSpaceToHyphen = function (str) {
  for (var i = 0; i < str.length; i++) {
    console.log("check for hyphen : ", spaceToHyphen(str[i]));
  }
}

allSpaceToHyphen("Lorem Ipsum");


var allSpaceToHyphen = function (str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result = result + spaceToHyphen(str[i]);
    console.log(result);
  }
  // return result;
}

console.log("allSpaceToHyphen : ", allSpaceToHyphen("Lorem Ipsum"));


var allSpaceToHyphen = function (str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result = result + spaceToHyphen(str[i]);
  }
  return result;
}

console.log("allSpaceToHyphen : ", allSpaceToHyphen("Lorem Ipsum"));


// console.log("test2 : ",allUpperToLower("Lorem Ipsum"))


var string_parameterize = function (str) {
  console.log("inner string_parameterize : ", allSpaceToHyphen(str));
}

console.log("string_parameterize : ", string_parameterize("Lorem Ipsum"));

var string_parameterize = function (str) {
  return allSpaceToHyphen(str);
}

console.log("string_parameterize : ", string_parameterize("Lorem Ipsum"));

var string_parameterize = function (str) {
  return allUpperToLower(allSpaceToHyphen(str));
}

console.log("string_parameterize : ", string_parameterize("Lorem Ipsum"));

// https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
var str = "Hello World!";
console.log(str.toLowerCase());

// https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Global_Objects/String/replace
var str = "Hello World!";
console.log("replace : ", str.replace("H", "h").replace("W", "w"));

var str = "Hello World!";
console.log("replace : ", str.replace(" ", "-"));


var string_parameterize = function (str) {
  return str.toLowerCase().replace(" ", "-");
}
console.log(string_parameterize("Lorem Ipsum"));

console.log('String Parameterize: ' + (string_parameterize("Lorem Ipsum") === 'lorem-ipsum'));
