const express = require('express');

const app = express();

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

app.listen(3333);