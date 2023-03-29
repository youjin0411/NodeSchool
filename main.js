const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req, res) {
    let url = req.url;

    if (url === '/') {
        url = '/index.html';
    }
    //favion : 신경쓰지 말것, 시험에 나오지 않음. 
    if (url === '/favicon.ico') {
        return res.writeHead(404);
    }
    res.writeHead(200);
    // __dirname : 현재 파일이 있는 디렉토리 'c:\Users\User\Desktop\2023_NODE\main.js' + url : /index.html
    const htmlCode = fs.readFileSync(__dirname + url);
    res.end(htmlCode);
})

app.listen(3333);