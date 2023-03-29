// http: //opentutorials.org:3000/main?id=HTML&page=12
//     => 형식은 protocol: //host(domain):port/path?query string

//     IP -
//     IP를 알면 컴퓨터를 장악할 수 있다.

// port
//     각각의 프로그램마다 각각의 포트번호가 있는데, 그 포트번호를 통해 컴퓨터를 찾을 수 있다.
const http = require('http');

const port = 3030;

const server = http.createServer(function(req, res) {

    // http header
    res.statusCode = 200; //200은 서버 요청하는데 있어 아무 문제도 없음을 알려주는 코드임.
    res.setHeader('Content-Type', 'text/plain'); //Content-Type에 따라 다양한 형식이 있음. 

    // http body (실제 데이터)
    res.end("Hello World");
});

server.listen(port, function() {

    console.log(`listen ${port}`);
});