const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'Grace', 'html')));

console.log(__dirname)

// 모든 경로에 요청
app.get('*', function(req, res, next){
  console.log('안녕하세요.')
  next()
})

// 루트(/) 경로에 get으로 요청하는 경우
app.get('/', function(req, res, next) {
  console.log("Node.js 수업 시간입니다.")
  next();
});

app.get('/test/:name', function(req,res,next){
  console.log('path', req.path);           //'/test/kyj'
  console.log('params', req.params.name);  //{name: 'kyj'}
  console.log('query', req.query)          //{lang: 'ko'}
  console.log('test중 콘솔을 보시오.')
})

app.listen(3333);