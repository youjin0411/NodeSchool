setTimeout(function() {
    // 5초 후에 실행될 코드
    // 그 이유는 setTimeout() 함수가 비동기 함수이기 때문이다.
    // 비동기 함수는 즉시 실행되지 않고, 다른 코드가 실행된 후에 실행된다.
    // setTimeout은 비동기 함수이다.    
    console.log("5초 경과");
}, 5000);
setTimeout(test, 2000);

function test() {
    console.log("2초 경과");
}