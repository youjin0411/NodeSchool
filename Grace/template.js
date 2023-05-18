const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

//index.ejs에 넘겨줄 data
const index = {
    name: 'KYJ',
    here: '한국'
};

const name = {
    name1: '아무개',
    name2: '누구개',
    name3: '이무개'
}

// const food = {
//     food1: '쿠기',
//     food2: '도넛',
//     food3: '사탕'
// }

const food = ["떡볶이", "피자", "치킨"]
const food1 = "쿠기"
const food2 = "도넛"

const server = http.createServer(function(req, res) {
    console.log(req.method)
        // 서버에 요청이 들어오면 요청에 대한 응답을 보내준다.
        //응답을 보내주는 형식은 html 형식이다. 
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        //매개변수 첫번째는 파일의 경로, 두번째는 객체, 세번째는 콜백함수
        // renderFile(ejs대상경로, ejs에 넘겨줄 데이터, 이후에 실행할 callback)
        ejs.renderFile(path.join(__dirname, 'template', 'index.ejs'), { name: index.name, here: index.here })
            // 데이터를 넘겨받은 ejs 코드(data)를 클라이언트에게 보낸다. 
            // function(err, data) {
            //     res.end(data);
            // }
            // 데이터를 넘겨받은 ejs 코드(data)를 클라이언트에게 보낸다. 
            .then((data) => res.end(data));
    } else if (req.url === '/food') {
        // fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res);
        // 만약 경로가 /food가 아니라면 404.html 파일을 읽어서 응답으로 보내준다.
        ejs.renderFile(path.join(__dirname, 'template', 'food.ejs'), { 
            name1: name.name1, 
            name2: name.name2, 
            name3: name.name3, 
            food
        })
            // 데이터를 넘겨받은 ejs 코드(data)를 클라이언트에게 보낸다. 
            // function(err, data) {
            //     res.end(data);
            // }
            // 데이터를 넘겨받은 ejs 코드(data)를 클라이언트에게 보낸다. 
            .then((data) => res.end(data));
    } else {
        fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);
    }
});
server.listen(3344);