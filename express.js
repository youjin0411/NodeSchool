const express = require('express')
const app = express()


app.get('*', function(req, res, next){
    console.log("Hello")
    next()
})
app.get('/', function(req, res, next){
    res.send("Hello World")
})

app.get('/queryparam/:name', function(req, res, next){
    console.log('path', req.path)
    console.log('param', req.param)
    console.log('query', req.query)
})
app.listen(3333);

// 파일 읽기 
const fs = require('fs')
// 운영체제와 시스템의 정보 
const os = require('os')
// 파일 경로
const path = require('path')
// http 서버 
const http = require('http')
// ejs 가져오기
const ejs = require('ejs')

const fruits = ['apple', 'banana', 'orange', 'pear'];
fruits.forEach(function(f){
    console.log(f)
})


strs = "hello world bye hi kekeke"
console.log(strs.includes('world')); // true

