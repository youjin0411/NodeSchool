const fs = require('fs');

// __dirname: 현재 파일의 경로를 나타냄.
//C:\Program Files\nodejs\node.exe .\문법\fs.js (상대경로)
//D:\2023_NODE\문법\fs.js (절대경로)
// 절대 경로를 출력함. 
console.log(__dirname);

//해당 경로에 있는 파일 목록을 배열로 반환
const files = fs.readdirSync(__dirname);

// 특정 파일의 전체(절대) 경로를 반환
result = __dirname + "\\" + files[1];

// 해당 파일에대한 정보를 알 수 있음 
console.log(fs.statSync(result));