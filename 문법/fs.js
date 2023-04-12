const fs = require('fs');
const path = require('path');

// __dirname: 현재 파일의 경로를 나타냄.
//C:\Program Files\nodejs\node.exe .\문법\fs.js (상대경로)
//D:\2023_NODE\문법\fs.js (절대경로)
// 절대 경로를 출력함. 
console.log(__dirname);

//해당 경로에 있는 파일 목록을 배열로 반환
const files = fs.readdirSync(__dirname);

// 특정 파일의 전체(절대) 경로를 반환
// result = __dirname + "\\" + files[1];

// 문자열 합치는 것보다 join을 사용하는 것을 권장
// join을 더 권장하는 이유는 경로방식을 운영체제에 맞게 자동으로 변경해줌. 
// path.join 시험에 나옴.
result = path.join(__dirname, files[1]);
console.log(result)

// 해당 파일에대한 정보를 알 수 있음 
console.log(fs.statSync(result));