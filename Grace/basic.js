const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res) {
    console.log(req.method)
        // 서버에 요청이 들어오면 요청에 대한 응답을 보내준다.
        //응답을 보내주는 형식은 html 형식이다. 
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        // 현재 디렉토리의 html 폴더의 index.html 파일을 읽어서 응답으로 보내준다.
        // createReadStream을 통해서 html/index.html 파일을 읽는다.
        // 스트리밍 방식으로 index의 html 코드들을 전송 (대용량 처리에 유리)
        // 파일입출력: 파일을 한꺼번에 처리함
        // 스트림: 파일을 부분적으로 쪼개서 실시간으로 처리함.
        fs.createReadStream(path.join(__dirname, 'html', 'index.html')).pipe(res);
    }
})
server.listen(3333);