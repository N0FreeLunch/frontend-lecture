var fs = require('fs');

var fileName = __dirname+'/Adams_1797.txt';

// https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
  data = data.replace(/\./g, '').replace(/\,/g, '').replace(/:/g, '');
  var words = data.split(/\s/);

  // console.log(words);

  var wordsCountMap = new Map();
  for (var i = 0; i < words.length; i++) {
    if(!wordsCountMap.get(words[i])) {
      // dinner를 뽑았는데 없으면 실행하세요.
      wordsCountMap.set(words[i], 1);
    }else {
      if(wordsCountMap.get(words[i])) {
        // dinner를 뽑았는데 있으면 실행하세요.
        wordsCountMap.set(words[i], wordsCountMap.get(words[i])+1);
      }
    }
  }

  console.log(wordsCountMap);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
  var wordsCountArray = [];
  wordsCountMap.forEach(function (value, key, map) {
    if(value >= 3){
      wordsCountArray[key] = value;
    }
  });

  console.log(wordsCountArray);

  var exceptWordList = [
    'of',
    'the',
    'it',
    'was',
    'to',
    'by',
    'these',
    'are',
    'were',
    'so',
    'has',
    'and',
    'you',
    'an',
    'some',
    'with',
    'within',
    'at',
    'have',
  ];

  for (var i = 0; i < exceptWordList.length; i++) {
    // https://stackoverflow.com/questions/346021/how-do-i-remove-objects-from-a-javascript-associative-array
    delete wordsCountArray[exceptWordList[i]];
    // 배열의 키를 삭제한다.
  }
  //   delete wordsCountArray['of'];

  console.log(wordsCountArray);

});
