const fs = require('fs');

// __dirname: 현재 파일의 경로를 나타냄.
//C:\Program Files\nodejs\node.exe .\문법\fs.js (상대경로)
//D:\2023_NODE\문법\fs.js (절대경로)
// 절대 경로를 출력함. 
console.log(__dirname);


const files = fs.readdirSync(__dirname);
console.log(files);