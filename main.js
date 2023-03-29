// require('http')는 http를 사용할 수 있게 해주는 모듈임. 
const http = require('http');
//require('fs')는 파일을 읽어오는 모듈임.
const fs = require('fs');

// const app = http.createServer(function(req, res) {
//     let url = req.url;

//     if (url === '/') {
//         url = '/index.html';
//     }
//     //favion : 신경쓰지 말것, 시험에 나오지 않음. 
//     if (url === '/favicon.ico') {
//         return res.writeHead(404);
//     }
//     res.writeHead(200);
//     // __dirname : 현재 파일이 있는 디렉토리 'c:\Users\User\Desktop\2023_NODE\main.js' + url : /index.html
//     const htmlCode = fs.readFileSync(__dirname + url);
//     res.end(htmlCode);
// })

// require('url')은 현재 url을 가져오는 모듈임.
const url = require('url');

const app = http.createServer(function(req, res) {
    let _url = req.url; //_url은 자료형이 string임. 그래서 _url을 사용하는 이유는 자료형을 명시하기 위함임.
    //동적인 웹페이지를 만들기 위해서는 url을 통해 데이터를 전달해야 함.
    //url.parse(_url, true) : url을 분석하는 모듈임.
    //url을 통해 데이터를 전달할 때는 query string을 사용함
    //query string : ?id=HTML&page=12
    //=> 문자열 형태의 _url을 object 형태로 변환 
    let queryData = url.parse(_url, true).query;
    res.end(queryData.id);
});

app.listen(3333);