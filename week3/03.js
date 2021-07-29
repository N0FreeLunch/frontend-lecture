// 1, 3 => 1 + 3
// 1, 5 => 1 + 3 + 5

// 비교는 항상 =가 오른쪽에 있어야 한다.
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("---");

for (var i = 1; i <= 5; i++) {
  if(i == 1) {
    console.log(i);
  }else if(i == 3) {
    // 그렇지 않고 이거면
    console.log(i);
  }else if (i == 5) {
    console.log(i);
  }else {
    // 그렇지 않으면
  }
}


console.log("% : ", 5%3);
// 5에는 3이 한 번 들어가고 나머지가 2가 나옴
console.log("% : ", 10%3);
// 몫이 3이고 나머지가 1
console.log("% : ", 10%5);
// 몫은 2이고 나머지는 0

console.log("% : ", 10%2); // 0, 짝수
console.log("% : ", 11%2); // 1, 홀수
console.log("% : ", 12%2); // 0, 짝수
console.log("% : ", 13%2); // 1, 홀수


for (var i = 1; i <= 5; i = i+1) {
  // 시작은 1로 시작한다.
  // 5이하일 때까지 반복한다.
  // i++ : 한번 돌 때 i는 1씩 증가한다.
  if(i%2 == 1) {
    // i값이 홀수이면
    console.log(i);
  }else {
    // 그렇지 않으면
  }
}


for (var i = 1; i <= 50; i++) {
  if(i%2 == 1) {
    console.log(i);
  }else {
  }
}

var sumOdd = function (startNum, endNum) {
  for (var i = startNum; i <= endNum; i++) {
    if(i%2 == 1) {
      console.log("inner i : ",i);
    }else {
    }
  }
}

sumOdd(4, 10);


var sumOdd = function (startNum, endNum) {
  // 시작 넘버와 끝 번호가 들어온다.
  var result = 0;
  for (var i = startNum; i <= endNum; i++) {
    // 시작번호 부터 끝 번호까지 반복 문을 돌린다.
    if(i%2 == 1) {
      // i가 홀수일 때 사용하는 로직을 쓴다.
      result = result + i;
      console.log("innert sumOdd : ", result);
    }else {
      // i가 홀수가 아닐 때 사용하는 로직을 쓴다.
    }
  }
  return result;
}

console.log("sum odd", sumOdd(4, 10));


var sum_of_odd_numbers = function (startNum, endNum) {
  var result = 0;
  for (var i = startNum; i <= endNum; i++) {
    if(i%2 == 1) {
      result = result + i;
    }
  }
  return result;
}
console.log("sum_of_odd_numbers : ", sum_of_odd_numbers(1, 3));
console.log("sum_of_odd_numbers : ", sum_of_odd_numbers(5, 20));

console.log('Sum of Odd Num #1: ' + (sum_of_odd_numbers(1,3) === 4));
console.log('Sum of Odd Num #2: ' + (sum_of_odd_numbers(5,20) === 96));
