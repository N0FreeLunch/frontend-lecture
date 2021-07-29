// console.log('Celcius: ' + (celcius_to_fahrenheit(40) === 104))
// 공식 : (0°C × 9/5) + 32 = 32°F


var convertTemperature = function (celcius) {
  var fahrenheit = celcius * 9 / 5 + 32;
  return fahrenheit;
}

console.log(convertTemperature(40));

var celcius_to_fahrenheit = function (celcius) {
  return celcius * 9 / 5 + 32;
}

console.log(convertTemperature(40));
console.log(convertTemperature(100));
console.log(convertTemperature(-50));

console.log('Celcius: ' + (celcius_to_fahrenheit(40) === 104))
