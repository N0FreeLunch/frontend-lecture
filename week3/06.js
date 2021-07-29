// console.log('Mean of Array #1: ' + (Number.parseFloat(mean_of_array([1,1,2])).toFixed(1) === "1.3"))
// console.log('Mean of Array #2: ' + (Number.parseFloat(mean_of_array([1,1,2,5,5])).toFixed(1) === "2.8"))


// 1,1,2 의 평균
console.log(1+1/2);
console.log("mean : ", (1+1)/2);

console.log("mean : ",(1+1+2)/3);
// 1.3333333333333333 이걸 1.3으로 바꿔야 한다.


// 원시타입 참조타입
// 원시타입은 object가 아니기 때문에 아무것도 가지고 있지 않다.
console.log(1.23456789); // 원시 타입

// 객체(object)
// object는 뭔가를 가지고 있다.
// number 오브젝트는 toFixed 함수를 가지고 있다.
console.log(1.23456789.toFixed(1)); // 참조타입

// 원시타입.어쩌구 => 원시타입이 참조타입으로 바뀐다. 숫자가 뭔가를 가지고 있는 것으로 바뀐다.
// 이해가 안 되면 몰라도 된다. => 이게 중요하다.

// 평균의 정의
// 전체 값 다 더하고 전체 값 개수만큼 나눠준다.

var sum_of_array = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sum_of_array([1,1,2]));
console.log(sum_of_array([1,1,2])/3);


// 추상화
var mean_of_array = function (array) {
  return sum_of_array(array)/array.length;
}

console.log("mean_of_array : ", mean_of_array([1,1,2]));


var mean_of_array = function (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum/array.length;
}
// sum_of_array함수에서 return sum 부분에 /array.length

console.log("mean_of_array : ", mean_of_array([1,1,2]));

// Number.parseFloat()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat

// 의미 추론
console.log("Number.parseFloat : ", Number.parseFloat('4.567abcdefgh'));
console.log("Number.parseFloat : ", Number.parseFloat('4567abcdefgh'));
console.log("Number.parseFloat : ", Number.parseFloat('4567abcdefg12345'));
console.log("Number.parseFloat : ", Number.parseFloat('45.67abcdefg1234.5'));

// 어느값이 들어가도 Number로 바꿔준다.

// toFixed()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// Number라는 것은 toFixed()를 가지고 있다.
// console.log('45.67abcdefg1234.5'.toFixed());
// String은 toFixed()를 가지고 있지 않다.

// 에러를 나지 않게 하기 위해서 어느값이 들어가도 Number로 바꿔준다.
// 에러가 나면 뒤에 코드가 실행이 안 되기 때문에 주석처리 한다.


console.log("sum_of_array :", sum_of_array(['A', 'B', 'C']));
// console.log("sum_of_array :", sum_of_array(['A', 'B', 'C']).toFixed()); // 에러
// 문자열에 .toFixed()를 써서 에러남

console.log("sum_of_array :", sum_of_array([11, 12, 13]));
console.log("sum_of_array.toFixed() :", sum_of_array([11, 12, 13]).toFixed(0));
console.log("sum_of_array.toFixed() :", sum_of_array([11, 12, 13]).toFixed(1));
console.log("sum_of_array.toFixed() :", sum_of_array([11, 12, 13]).toFixed(2));

// 결과값이 문자열이 나와도 .toFixed()로 인한 에러를 발생하게 하지 않기 위해서 Number.parseFloat()를 사용했다.
console.log("sum_of_array :", sum_of_array(['A', 'B', 'C']));
console.log("Number.parseFloat :",  Number.parseFloat(sum_of_array(['A', 'B', 'C'])));
console.log("Number.parseFloat :",  Number.parseFloat(sum_of_array(['A', 'B', 'C'])).toFixed(2));


console.log("Number.parseFloat :",  Number.parseFloat("ABC"));
// NaN 도 하나의 Number에 속하는 대상으로 본다. 그래서 .toFixed(2)를 쓸 수 있다. 에러가 안 난다.
console.log("Number.parseFloat :",  Number.parseFloat("ABC").toFixed(2));


console.log('Mean of Array #1: ' + (Number.parseFloat(mean_of_array([1,1,2])).toFixed(1) === "1.3"));
console.log('Mean of Array #2: ' + (Number.parseFloat(mean_of_array([1,1,2,5,5])).toFixed(1) === "2.8"));
